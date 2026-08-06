import { createFileRoute } from "@tanstack/react-router";

type ChatBody = {
  sessionId?: string;
  message?: string;
  context?: Record<string, unknown>;
};

const REPLY_KEYS = ["reply", "message", "output", "text", "answer", "response", "content"];

/** Extrai o texto da resposta do n8n aceitando string, objeto, array ou aninhamentos comuns. */
function extractReply(data: unknown, depth = 0): string {
  if (depth > 4 || data == null) return "";
  if (typeof data === "string") return data.trim();
  if (Array.isArray(data)) {
    for (const item of data) {
      const found = extractReply(item, depth + 1);
      if (found) return found;
    }
    return "";
  }
  if (typeof data === "object") {
    const obj = data as Record<string, unknown>;
    for (const key of REPLY_KEYS) {
      const value = obj[key];
      if (typeof value === "string" && value.trim()) return value.trim();
    }
    for (const key of ["json", "data", "body", "result"]) {
      const found = extractReply(obj[key], depth + 1);
      if (found) return found;
    }
  }
  return "";
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: ChatBody;
        try {
          body = (await request.json()) as ChatBody;
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const message = (body.message ?? "").toString().trim();
        const sessionId = (body.sessionId ?? "").toString().trim();
        if (!message || !sessionId) {
          return Response.json({ error: "sessionId and message are required" }, { status: 400 });
        }
        if (message.length > 2000) {
          return Response.json({ error: "Message too long" }, { status: 400 });
        }

        const webhookUrl = process.env.N8N_WEBHOOK_URL;
        if (!webhookUrl) {
          return Response.json(
            { reply: "O atendente virtual ainda não está conectado. Em breve!" },
            { status: 200 },
          );
        }

        const token = process.env.N8N_WEBHOOK_TOKEN;
        const headers: Record<string, string> = { "Content-Type": "application/json" };
        if (token) headers["Authorization"] = `Bearer ${token}`;

        try {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 25000);
          const res = await fetch(webhookUrl, {
            method: "POST",
            headers,
            body: JSON.stringify({
              sessionId,
              message,
              context: body.context && typeof body.context === "object" ? body.context : undefined,
            }),
            signal: controller.signal,
          });

          clearTimeout(timeout);

          if (!res.ok) {
            const detail = await res.text().catch(() => "");
            console.error("n8n webhook error", res.status, detail);
            return Response.json(
              {
                reply: "Tive um problema para responder agora. Pode tentar novamente?",
                ...(process.env.NODE_ENV !== "production"
                  ? { debug: { status: res.status, detail: detail.slice(0, 500) } }
                  : {}),
              },
              { status: 200 },
            );
          }


          const contentType = res.headers.get("content-type") ?? "";
          let reply = "";
          if (contentType.includes("application/json")) {
            const data = (await res.json()) as unknown;
            reply = extractReply(data);
          } else {
            reply = (await res.text()).trim();
          }

          if (!reply) {
            console.warn("n8n webhook returned no recognizable reply field");
            return Response.json({
              reply: "Recebi sua mensagem, mas não consegui gerar uma resposta agora.",
            });
          }

          return Response.json({ reply });

        } catch (err) {
          console.error("n8n webhook fetch failed", err);
          return Response.json(
            { reply: "Não consegui contactar o atendente agora. Tente novamente em instantes." },
            { status: 200 },
          );
        }
      },
    },
  },
});

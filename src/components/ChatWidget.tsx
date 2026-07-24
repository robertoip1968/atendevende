import { useEffect, useRef, useState } from "react";
import { X, Send } from "lucide-react";
import logo from "@/assets/atende-vende-logo.asset.json";
import chatbotAvatar from "@/assets/chatbot-avatar.png.asset.json";

type Msg = { role: "bot" | "user"; text: string };

const quickOptions = [
  "Demora para responder",
  "Falta de acompanhamento",
  "Equipe sobrecarregada",
  "Dificuldade para vender",
  "Necessidade de integração",
  "Quero conhecer a solução",
];

const initialMsgs: Msg[] = [
  { role: "bot", text: "Olá! Qual é hoje o maior problema do seu atendimento?" },
];

function getSessionId(): string {
  if (typeof window === "undefined") return "ssr";
  const key = "av_chat_session";
  let id = window.localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID?.() ?? `s_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    window.localStorage.setItem(key, id);
  }
  return id;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>(initialMsgs);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  async function sendText(text: string) {
    const clean = text.trim();
    if (!clean || typing) return;
    setMsgs((m) => [...m, { role: "user", text: clean }]);
    setInput("");
    setTyping(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: getSessionId(), message: clean }),
      });
      const data = (await res.json().catch(() => ({}))) as { reply?: string };
      const botReply = data.reply?.trim() || "Desculpe, não consegui responder agora.";
      setMsgs((m) => [...m, { role: "bot", text: botReply }]);
    } catch {
      setMsgs((m) => [
        ...m,
        { role: "bot", text: "Falha de conexão. Tente novamente em instantes." },
      ]);
    } finally {
      setTyping(false);
    }
  }
  function send() {
    void sendText(input);
  }

  return (
    <>
      {/* Floating button */}
      <div className="fixed right-4 md:right-5 bottom-4 md:top-1/2 md:bottom-auto md:-translate-y-1/2 z-50 flex flex-col items-center gap-2">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir chat"
          className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-gradient-brand shadow-glow flex items-center justify-center text-primary-foreground transition-transform hover:scale-105 active:scale-95 overflow-hidden border-2 border-background"
        >
          {open ? (
            <X className="h-7 w-7" />
          ) : (
            <img
              src={chatbotAvatar.url}
              alt="Avatar da IA Atende&Vende"
              className="h-full w-full object-cover"
            />
          )}
        </button>
        {!open && (
          <span className="hidden md:inline-block px-3.5 py-1.5 rounded-2xl bg-card border border-border text-xs font-medium text-foreground shadow-sm text-center max-w-[180px]">
            Veja como o Atende&Vende pode ajudar sua empresa.
          </span>
        )}
      </div>

      {/* Chat panel */}
      <div
        className={`fixed right-4 md:right-5 bottom-20 md:top-1/2 md:bottom-auto md:-translate-y-1/2 z-50 w-[92vw] max-w-sm h-[70vh] max-h-[560px] bg-card rounded-2xl shadow-glow border border-border flex flex-col overflow-hidden transition-all duration-300 origin-center-right ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
        role="dialog"
        aria-label="Chat com IA Atende&Vende"
      >
        <header className="bg-gradient-brand text-primary-foreground p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/95 p-1 flex items-center justify-center">
              <img src={logo.url} alt="Atende&Vende" className="h-full w-full object-contain" />
            </div>
            <div>
              <div className="font-semibold leading-tight">IA Atende&Vende</div>
              <div className="text-xs opacity-90 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-green-400" /> Online agora
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar chat"
            className="h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-soft">
          {msgs.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-card text-card-foreground rounded-bl-sm shadow-card"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {msgs.length === 1 && !typing && (
            <div className="flex flex-wrap gap-2 pt-1">
              {quickOptions.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => sendText(q)}
                  className="text-xs px-3 py-1.5 rounded-full border border-border bg-card hover:bg-muted transition"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
          {typing && (
            <div className="flex justify-start">
              <div className="bg-card px-4 py-3 rounded-2xl rounded-bl-sm shadow-card flex gap-1">
                <span className="h-2 w-2 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="h-2 w-2 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="h-2 w-2 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); send(); }}
          className="p-3 border-t border-border bg-card flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 bg-muted rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button
            type="submit"
            aria-label="Enviar"
            className="h-10 w-10 rounded-full bg-gradient-brand text-primary-foreground flex items-center justify-center hover:opacity-90 transition"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </>
  );
}

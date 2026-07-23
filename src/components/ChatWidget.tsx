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

function reply(input: string): string {
  const t = input.toLowerCase();
  if (/(demora|resposta|lento|tempo)/.test(t))
    return "Entendi. O Atende&Vende responde na hora pelo WhatsApp, 24/7, e garante que nenhum cliente fique esperando.";
  if (/(acompanh|follow|sumiu|parou)/.test(t))
    return "O Atende&Vende faz follow-up automático e retoma conversas que pararam antes da decisão.";
  if (/(sobrecarreg|equipe|time|volume)/.test(t))
    return "A IA cuida do atendimento inicial, qualifica e só transfere para sua equipe quando faz sentido — com todo o contexto.";
  if (/(vend|convers|orçamento|pedido)/.test(t))
    return "Conduzimos o cliente até orçamento, pedido ou agendamento dentro do próprio WhatsApp. Quer receber um diagnóstico?";
  if (/(integr|crm|erp|sistema|api)/.test(t))
    return "Integramos com CRM, ERP, planilhas e sistemas internos para automatizar processos ponta a ponta.";
  if (/(conhec|solu|saber|demo|diagn)/.test(t))
    return "Ótimo! Deixe seu nome e WhatsApp no formulário abaixo que um especialista entra em contato para um diagnóstico gratuito.";
  if (/(pre[çc]o|valor|plano|custo)/.test(t))
    return "Temos planos a partir de R$ 790/mês. Posso te encaminhar para a seção de planos ou para falar com um especialista.";
  if (/(oi|ol[aá]|bom dia|boa tarde|boa noite)/.test(t))
    return "Oi! Qual é hoje o maior desafio do seu atendimento?";
  return "Anotado. Um especialista pode te ajudar com um diagnóstico. Quer que eu conecte você com o time?";
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

  function sendText(text: string) {
    const clean = text.trim();
    if (!clean) return;
    setMsgs((m) => [...m, { role: "user", text: clean }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "bot", text: reply(clean) }]);
      setTyping(false);
    }, 700);
  }
  function send() {
    sendText(input);
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

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import logo from "@/assets/atende-vende-logo.asset.json";

type Msg = { role: "bot" | "user"; text: string };

const initialMsgs: Msg[] = [
  { role: "bot", text: "Olá! 👋 Eu sou a IA do Atende&Vende. Como posso te ajudar hoje?" },
  { role: "bot", text: "Posso falar sobre: automação de atendimento, integração com WhatsApp, funil de vendas ou agendar uma demo." },
];

function reply(input: string): string {
  const t = input.toLowerCase();
  if (/(pre[çc]o|valor|plano|custo)/.test(t))
    return "Temos planos a partir de R$ 197/mês. Quer que eu te envie uma proposta personalizada? Deixe seu e-mail!";
  if (/(whats|zap|instagram|canal)/.test(t))
    return "Integramos WhatsApp Oficial, Instagram Direct, Messenger e webchat em uma só caixa de entrada. 🚀";
  if (/(demo|teste|experi)/.test(t))
    return "Perfeito! Agende uma demo gratuita de 20 min. Me passe seu nome e telefone que nosso time entra em contato.";
  if (/(venda|fluxo|funil|convers[aã]o)/.test(t))
    return "Nosso fluxo qualifica leads 24/7, envia para o vendedor certo e aumenta a conversão em até 3x. 📈";
  if (/(oi|ol[aá]|bom dia|boa tarde|boa noite)/.test(t))
    return "Oi! Que bom te ver por aqui. Qual desafio de atendimento você quer resolver?";
  if (/(obrigad|valeu|thanks)/.test(t))
    return "Por nada! Estou aqui sempre que precisar. 💙";
  return "Legal! Um especialista humano pode te dar mais detalhes. Quer agendar uma conversa rápida?";
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

  function send() {
    const text = input.trim();
    if (!text) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "bot", text: reply(text) }]);
      setTyping(false);
    }, 700);
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir chat"
        className="fixed right-5 bottom-5 z-50 h-16 w-16 rounded-full bg-gradient-vibrant shadow-glow-strong flex items-center justify-center text-primary-foreground transition-transform hover:scale-110 active:scale-95 animate-pulse-glow"
      >
        {open ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
        {!open && (
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent border-2 border-background animate-pulse" />
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed right-5 bottom-24 z-50 w-[92vw] max-w-sm h-[70vh] max-h-[560px] bg-card rounded-2xl shadow-glow border border-border flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
        role="dialog"
        aria-label="Chat com IA Atende&Vende"
      >
        <header className="bg-gradient-vibrant text-primary-foreground p-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/95 p-1 flex items-center justify-center">
            <img src={logo.url} alt="Atende&Vende" className="h-full w-full object-contain" />
          </div>
          <div>
            <div className="font-semibold leading-tight">IA Atende&Vende</div>
            <div className="text-xs opacity-90 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green-400" /> Online agora
            </div>
          </div>
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

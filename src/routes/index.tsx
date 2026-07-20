import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Instagram, Check, ArrowRight, Bot, Workflow, MessageSquare, TrendingUp, Clock, ShieldCheck } from "lucide-react";
import logo from "@/assets/atende-vende-logo.asset.json";
import atendimentoImg from "@/assets/atendimento.jpg";
import vendasImg from "@/assets/vendas-dashboard.png.asset.json";
import automacaoImg from "@/assets/automacao-agente.png.asset.json";
import heroRobot from "@/assets/hero-robot.png.asset.json";
import { ChatWidget } from "@/components/ChatWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atende&Vende — Automação de Atendimento e Vendas com IA" },
      { name: "description", content: "Automatize seu fluxo de atendimento e vendas com IA. Integre WhatsApp, Instagram e mais em uma única plataforma." },
      { property: "og:title", content: "Atende&Vende — Automação de Atendimento e Vendas" },
      { property: "og:description", content: "Automatize atendimento e vendas com IA. WhatsApp, Instagram e mais em uma plataforma." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "A Atende&Vende" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#areas", label: "Áreas" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur border-b border-border py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-4">
            <img src={logo.url} alt="Atende&Vende" className="h-16 w-16 object-contain" />
            <span className={`font-semibold text-2xl tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-white drop-shadow"}`}>
              Atende<span className="text-brand">&</span>Vende
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm uppercase tracking-[0.2em] font-medium transition-colors ${
                  scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero — full bleed image with overlay */}
      <section id="inicio" className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={heroRobot.url}
          alt="Robô de IA atendendo cliente em loja"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden />

        <div className="relative h-full flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <img src={logo.url} alt="" className="h-20 w-20 object-contain mb-8 drop-shadow-lg" />
          <h1 className="text-white font-light tracking-tight text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-2xl">
            Atende&amp;Vende
          </h1>
          <p className="mt-5 text-white/90 font-light text-xl md:text-2xl lg:text-3xl max-w-xl">
            Automação de atendimento e vendas, 24/7.
          </p>
          <a
            href="#sobre"
            className="mt-12 inline-flex flex-col items-center gap-2 text-white/90 hover:text-white uppercase tracking-[0.25em] text-[11px]"
          >
            Saiba mais
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Sobre — editorial intro */}
      <section id="sobre" className="py-28 lg:py-36">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Sobre</div>
          <div className="mt-6 h-px w-12 bg-border mx-auto" />
          <h2 className="mt-8 text-3xl md:text-4xl font-light tracking-tight leading-tight">
            Transformamos conversas em vendas com inteligência artificial.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground font-light leading-relaxed">
            A Atende&Vende integra WhatsApp, Instagram e webchat em uma única plataforma. Uma IA que qualifica leads,
            responde clientes e dispara vendas — enquanto seu time foca no que realmente importa.
          </p>
        </div>
      </section>

      {/* Split image + text block */}
      <section className="border-y border-border">
        <div className="grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto md:min-h-[560px]">
            <img src={atendimentoImg} alt="Atendimento com IA" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center px-6 md:px-16 py-16">
            <div className="max-w-md">
              <div className="uppercase tracking-[0.3em] text-[11px] text-brand">Nossa proposta</div>
              <h3 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
                Um atendente que nunca dorme.
              </h3>
              <p className="mt-6 text-muted-foreground font-light leading-relaxed">
                Configure em minutos, integre seus canais e deixe a IA conduzir o cliente do primeiro "olá" até o fechamento
                da venda — com tom humano e memória de contexto.
              </p>
              <a href="#contato" className="mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] font-medium border-b border-foreground pb-1 hover:gap-4 transition-all">
                Fale conosco <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios — clean grid */}
      <section id="beneficios" className="py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Benefícios</div>
            <div className="mt-6 h-px w-12 bg-border mx-auto" />
            <h2 className="mt-8 text-3xl md:text-4xl font-light tracking-tight">
              Tudo o que sua operação precisa.
            </h2>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {[
              { icon: Bot, title: "IA humanizada", desc: "Respostas naturais e transferência inteligente para o time." },
              { icon: Workflow, title: "Fluxos visuais", desc: "Desenhe automações em minutos, sem código." },
              { icon: MessageSquare, title: "Multi-canal", desc: "WhatsApp, Instagram, Messenger e webchat unificados." },
              { icon: TrendingUp, title: "Funil automático", desc: "Leads qualificados vão ao vendedor certo, na hora certa." },
              { icon: Clock, title: "24/7", desc: "Sua operação nunca para — a IA cuida do overnight." },
              { icon: ShieldCheck, title: "Seguro e LGPD", desc: "Infraestrutura em nuvem com criptografia nativa." },
            ].map((f) => (
              <div key={f.title} className="text-center md:text-left">
                <f.icon className="h-7 w-7 text-brand mx-auto md:mx-0" strokeWidth={1.4} />
                <h3 className="mt-5 text-lg font-medium tracking-tight">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas — clean grid cards */}
      <section id="areas" className="py-28 lg:py-36 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Áreas de atuação</div>
            <div className="mt-6 h-px w-12 bg-border mx-auto" />
            <h2 className="mt-8 text-3xl md:text-4xl font-light tracking-tight">
              Soluções para cada etapa do seu negócio.
            </h2>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              { tag: "Atendimento", title: "SAC & Suporte", desc: "Reduza o tempo de resposta e resolva tickets automaticamente com IA que aprende com seu time.", image: atendimentoImg },
              { tag: "Vendas", title: "Comercial & E-commerce", desc: "Feche vendas e qualifique leads em segundos pelo WhatsApp.", image: vendasImg.url },
              { tag: "Tecnologia", title: "Automação de Processos", desc: "Integre CRM, ERP e planilhas para criar fluxos que rodam sozinhos, 24 horas por dia.", image: automacaoImg.url },
            ].map((a) => (
              <article
                key={a.title}
                className="group bg-card border-t-4 border-brand overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-10 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="uppercase tracking-[0.25em] text-[11px] text-brand font-semibold">{a.tag}</div>
                    <h3 className="mt-6 text-2xl md:text-3xl font-medium tracking-tight leading-tight text-foreground">{a.title}</h3>
                    <p className="mt-5 text-muted-foreground font-light leading-relaxed">{a.desc}</p>
                  </div>
                  <div className="mt-10">
                    <div className="h-px w-12 bg-border mb-6" />
                    <a
                      href="#contato"
                      className="inline-flex items-center gap-3 text-sm font-medium text-foreground group-hover:gap-4 transition-all"
                    >
                      Saiba mais <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimento / stats */}
      <section className="py-28 lg:py-36 bg-muted/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Resultados</div>
          <div className="mt-6 h-px w-12 bg-border mx-auto" />
          <blockquote className="mt-10 text-2xl md:text-3xl font-light leading-snug tracking-tight">
            “Triplicamos nossa conversão em 60 dias. A IA responde melhor do que boa parte do meu time comercial.”
          </blockquote>
          <div className="mt-8 text-sm uppercase tracking-[0.22em] text-muted-foreground">Marina Alves — Diretora Comercial</div>

          <div className="mt-20 grid grid-cols-3 gap-10">
            {[
              { n: "2x", l: "Mais conversão" },
              { n: "24/7", l: "Atendimento" },
              { n: "-60%", l: "Custo operacional" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-4xl md:text-5xl font-light text-brand">{s.n}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Planos</div>
            <div className="mt-6 h-px w-12 bg-border mx-auto" />
            <h2 className="mt-8 text-3xl md:text-4xl font-light tracking-tight">Preço justo, sem surpresa.</h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { name: "Start", price: "197", desc: "Ideal para começar.", feats: ["1 canal", "1.000 conversas/mês", "Fluxos básicos", "Suporte por e-mail"], highlight: false },
              { name: "Pro", price: "497", desc: "Para times em crescimento.", feats: ["Canais ilimitados", "10.000 conversas/mês", "IA avançada", "Integrações CRM", "Suporte prioritário"], highlight: true },
              { name: "Scale", price: "Custom", desc: "Para grandes operações.", feats: ["Volume ilimitado", "IA sob medida", "SLA dedicado", "Gerente de conta"], highlight: false },
            ].map((p) => (
              <div
                key={p.name}
                className={`p-10 border transition-colors ${p.highlight ? "border-foreground bg-foreground text-background" : "border-border bg-card"}`}
              >
                <div className={`uppercase tracking-[0.3em] text-[11px] ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>{p.name}</div>
                <div className="mt-6">
                  {p.price === "Custom" ? (
                    <div className="text-3xl font-light">Sob consulta</div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className={`text-sm ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>R$</span>
                      <span className="text-5xl font-light">{p.price}</span>
                      <span className={`text-sm ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>/mês</span>
                    </div>
                  )}
                </div>
                <p className={`mt-3 text-sm font-light ${p.highlight ? "text-background/80" : "text-muted-foreground"}`}>{p.desc}</p>
                <ul className="mt-8 space-y-3">
                  {p.feats.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-light">
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.highlight ? "text-background" : "text-brand"}`} /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className={`mt-10 block text-center text-[11px] uppercase tracking-[0.25em] py-4 border transition ${
                    p.highlight ? "border-background hover:bg-background hover:text-foreground" : "border-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  {p.price === "Custom" ? "Falar com vendas" : "Começar agora"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="border-t border-border py-28 lg:py-36">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Contato</div>
            <div className="mt-6 h-px w-12 bg-border" />
            <h2 className="mt-8 text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Vamos conversar sobre o seu atendimento.
            </h2>
            <p className="mt-6 text-muted-foreground font-light">
              Preencha o formulário e um especialista entra em contato em minutos.
            </p>
            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
              <Instagram className="h-4 w-4" /> @atendevende
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert("Recebemos seu contato! Retornamos em breve."); }}
            className="space-y-5"
          >
            {[
              { name: "nome", ph: "Nome", type: "text" },
              { name: "email", ph: "E-mail", type: "email" },
              { name: "whats", ph: "WhatsApp", type: "text" },
            ].map((f) => (
              <input
                key={f.name}
                required
                type={f.type}
                placeholder={f.ph}
                className="w-full bg-transparent border-0 border-b border-border py-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition"
              />
            ))}
            <button className="mt-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-medium border-b border-foreground pb-2 hover:gap-4 transition-all">
              Enviar mensagem <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src={logo.url} alt="Atende&Vende" className="h-7 w-7 object-contain" />
            <span className="text-sm font-medium">Atende<span className="text-brand">&</span>Vende</span>
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            © {new Date().getFullYear()} Atende&Vende
          </p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}

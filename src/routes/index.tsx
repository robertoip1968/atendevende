import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Check, ArrowRight, MessageSquare, Cog, Repeat, Users, Clock3, Timer, UserCheck, CalendarCheck, Send } from "lucide-react";
import logo from "@/assets/atende-vende-logo.asset.json";
import atendimentoImg from "@/assets/atendimento.jpg";
import vendasImg from "@/assets/vendas-whatsapp.png.asset.json";
import automacaoImg from "@/assets/automacao-agente.png.asset.json";
import heroRobot from "@/assets/hero-robot.png.asset.json";
import fluxo01 from "@/assets/fluxo-01-recebe.png.asset.json";
import fluxo02 from "@/assets/fluxo-02-executa.png.asset.json";
import fluxo03 from "@/assets/fluxo-03-acompanha.png.asset.json";
import fluxo04 from "@/assets/fluxo-04-fecha.png.asset.json";
import { ChatWidget } from "@/components/ChatWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atende&Vende — Atenda, acompanhe e venda pelo WhatsApp" },
      { name: "description", content: "O Atende&Vende responde, qualifica e conduz cada oportunidade até o orçamento, agendamento, pedido ou venda. Uma operação comercial automatizada e acompanhada." },
      { property: "og:title", content: "Atende&Vende — Atenda, acompanhe e venda pelo WhatsApp" },
      { property: "og:description", content: "Muito mais do que responder mensagens: o Atende&Vende organiza a jornada comercial e acompanha cada oportunidade até o resultado." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    const id = setInterval(() => setActiveStep((s) => (s + 1) % 4), 2600);
    return () => clearInterval(id);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "A Atende&Vende" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#planos", label: "Planos" },
    { href: "#contato", label: "Contato" },
  ];

  const container = "max-w-[1240px] mx-auto px-5 md:px-8 lg:px-12";
  const sectionPad = "py-14 md:py-18 lg:py-22";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur border-b border-border py-3" : "bg-transparent py-5"
        }`}
      >
        <div className={`${container} flex items-center justify-between`}>
          <a href="#inicio" className="flex items-center gap-4">
            <img src={logo.url} alt="Atende&Vende" className="h-16 w-16 object-contain" />
            <span className={`font-semibold text-2xl tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-white drop-shadow-lg"}`}>
              Atende<span className="text-brand">&</span>Vende
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm uppercase tracking-[0.18em] font-medium transition-colors ${
                  scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/90 hover:text-white drop-shadow-md"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={heroRobot.url}
          alt="Interface Atende&Vende conduzindo uma conversa pelo WhatsApp"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />

        <div className={`relative h-full flex flex-col items-start justify-center ${container}`}>
          <div className="uppercase tracking-[0.28em] text-[11px] text-white/80 font-medium">
            Atendimento e vendas pelo WhatsApp
          </div>
          <h1 className="mt-5 text-white font-light tracking-tight text-[1.9rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.05] max-w-3xl">
            Atenda, acompanhe e venda sem perder clientes pelo caminho.
          </h1>
          <p className="mt-5 text-white/90 text-lg md:text-xl lg:text-2xl max-w-2xl font-light">
            O Atende&amp;Vende responde, qualifica e conduz cada oportunidade até o orçamento, agendamento, pedido ou venda.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-3 bg-brand text-white text-[11px] uppercase tracking-[0.22em] font-medium px-7 py-4 hover:bg-brand/90 transition"
            >
              Solicitar diagnóstico <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-3 border border-white/70 text-white text-[11px] uppercase tracking-[0.22em] font-medium px-7 py-4 hover:bg-white hover:text-foreground transition"
            >
              Ver como funciona
            </a>
          </div>
        </div>
      </section>

      {/* Sobre — consolidada */}
      <section id="sobre" className={sectionPad}>
        <div className={`${container} grid lg:grid-cols-12 gap-10 lg:gap-16 items-start`}>
          <div className="lg:col-span-7">
            <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Sobre</div>
            <div className="mt-5 h-px w-12 bg-border" />
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Muito mais do que responder mensagens.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed">
              Responder rápido é apenas o primeiro passo. Muitas oportunidades são perdidas depois da primeira resposta,
              quando ninguém acompanha o cliente até a decisão.
            </p>
            <p className="mt-4 text-lg text-muted-foreground font-light leading-relaxed">
              O Atende&Vende organiza a jornada comercial: entende a necessidade, executa tarefas, acompanha a oportunidade
              e aciona sua equipe no momento certo.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-6">
            <div className="border-l-2 border-brand pl-6">
              <p className="text-xl md:text-2xl font-light tracking-tight leading-snug">
                A IA cuida do processo.<br />
                <span className="text-brand">Sua equipe cuida das decisões.</span>
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { n: "01", l: "Organiza" },
                { n: "02", l: "Executa" },
                { n: "03", l: "Acompanha" },
              ].map((i) => (
                <div key={i.n} className="border border-border py-5">
                  <div className="text-brand text-sm font-medium">{i.n}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{i.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className={`${sectionPad} bg-muted/30 border-y border-border`}>
        <div className={container}>
          <div className="max-w-3xl">
            <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Benefícios</div>
            <div className="mt-5 h-px w-12 bg-border" />
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Tudo o que sua operação precisa para atender, acompanhar e vender melhor.
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MessageSquare, title: "Atende e qualifica", desc: "Responde rapidamente e identifica o que cada cliente procura." },
              { icon: Cog, title: "Executa processos", desc: "Consulta informações, agenda, gera orçamento ou registra pedidos." },
              { icon: Repeat, title: "Acompanha oportunidades", desc: "Faz follow-up e recupera conversas que pararam antes da decisão." },
              { icon: Users, title: "Transfere com contexto", desc: "Entrega à equipe o histórico da conversa e o próximo passo recomendado." },
            ].map((f) => (
              <div key={f.title} className="bg-card border border-border p-7">
                <f.icon className="h-6 w-6 text-brand" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg font-medium tracking-tight">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {["24/7", "Texto e áudio", "Integrações", "Histórico", "Segurança"].map((t, i, a) => (
              <span key={t} className="flex items-center gap-6">
                {t}
                {i < a.length - 1 && <span className="h-1 w-1 rounded-full bg-border" />}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className={sectionPad}>
        <div className={container}>
          <div className="max-w-2xl">
            <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Como funciona</div>
            <div className="mt-5 h-px w-12 bg-border" />
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Da primeira mensagem ao resultado.
            </h2>
            <p className="mt-5 text-muted-foreground font-light">
              O Atende&Vende acompanha cada oportunidade durante todo o processo comercial.
            </p>
          </div>

          <div className="mt-14">
            {(() => {
              const steps = [
                { n: "01", title: "Recebe e entende", desc: "Responde na hora pelo WhatsApp e identifica o que o cliente precisa.", img: fluxo01.url },
                { n: "02", title: "Executa a tarefa identificada", desc: "Consulta preço, agenda consulta, gera orçamento ou registra o pedido.", img: fluxo02.url },
                { n: "03", title: "Acompanha a oportunidade", desc: "Faz follow-up automático e retoma conversas paradas.", img: fluxo03.url },
                { n: "04", title: "Fecha o negócio", desc: "Fecha a venda ou transfere com contexto e próximo passo.", img: fluxo04.url },
              ];
              return (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {steps.map((s, i) => {
                    const active = i === activeStep;
                    return (
                      <button
                        key={s.n}
                        onClick={() => setActiveStep(i)}
                        className={`text-left border bg-card overflow-hidden transition-all duration-500 ${
                          active ? "border-brand shadow-md -translate-y-1" : "border-border hover:border-foreground/40"
                        }`}
                      >
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <img
                            src={s.img}
                            alt={`${s.n} — ${s.title}`}
                            className={`w-full h-full object-cover transition-transform duration-700 ${
                              active ? "scale-105" : "scale-100"
                            }`}
                          />
                          <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm border border-border px-2 py-1 text-[10px] tracking-[0.2em] font-medium">
                            <span className={active ? "text-brand" : "text-foreground"}>{s.n}</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="text-sm font-medium tracking-tight">{s.title}</div>
                          <p className="mt-1 text-xs text-muted-foreground font-light leading-relaxed">{s.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              );
            })()}

          </div>

        </div>
      </section>

      {/* Áreas de atuação */}
      <section id="areas" className={`${sectionPad} bg-muted/30 border-y border-border`}>
        <div className={container}>
          <div className="max-w-2xl">
            <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Áreas de atuação</div>
            <div className="mt-5 h-px w-12 bg-border" />
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight">
              Soluções para cada etapa do seu negócio.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { tag: "Atendimento", title: "Atendimento, agendamento e suporte", desc: "Atende, responde, agenda, faz triagem, tira dúvidas e encaminha para a equipe.", image: atendimentoImg },
              { tag: "Vendas", title: "Vendas e pedidos", desc: "Gera orçamentos, efetua vendas, gera pedidos, pedidos, pagamentos e executa follow-up.", image: vendasImg.url },
              { tag: "Automação", title: "Automação", desc: "Automatiza processos internos e faz integração com os sistemas da empresa.", image: automacaoImg.url },
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
                <div className="p-8 flex flex-col flex-1">
                  <div className="uppercase tracking-[0.25em] text-[11px] text-brand font-semibold">{a.tag}</div>
                  <h3 className="mt-4 text-xl md:text-2xl font-medium tracking-tight leading-tight text-foreground">{a.title}</h3>
                  <p className="mt-3 text-muted-foreground font-light leading-relaxed text-sm">{a.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className={sectionPad}>
        <div className={`${container} grid lg:grid-cols-12 gap-10 items-start`}>
          <div className="lg:col-span-5">
            <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Resultados</div>
            <div className="mt-5 h-px w-12 bg-border" />
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Mais controle sobre cada oportunidade.
            </h2>
            <p className="mt-6 text-muted-foreground font-light leading-relaxed">
              O Atende&Vende ajuda sua empresa a acompanhar onde os clientes estão parando e quais etapas do
              atendimento podem ser melhoradas.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {[
              { icon: Timer, l: "Tempo de primeira resposta" },
              { icon: UserCheck, l: "Clientes qualificados" },
              { icon: Repeat, l: "Follow-ups realizados" },
              { icon: CalendarCheck, l: "Agendamentos e pedidos concluídos" },
            ].map((i) => (
              <div key={i.l} className="border border-border p-6 flex items-start gap-4 bg-card">
                <i.icon className="h-6 w-6 text-brand shrink-0" strokeWidth={1.5} />
                <div className="text-sm font-medium tracking-tight">{i.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className={`${sectionPad} bg-muted/30 border-y border-border`}>
        <div className={container}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Planos</div>
            <div className="mt-5 h-px w-12 bg-border mx-auto" />
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight">Preço justo, sem surpresa.</h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6 items-start">
            {[
              {
                name: "Plano Essencial",
                price: "790",
                impl: "2.500",
                desc: "Para automatizar um processo principal de atendimento.",
                feats: [
                  "1 número de WhatsApp",
                  "Atendimento automatizado com IA",
                  "Respostas sobre produtos e serviços",
                  "Captura e qualificação de clientes",
                  "Fluxo principal personalizado",
                  "Suporte técnico em horário comercial",
                ],
                cta: "QUERO COMEÇAR",
                highlight: false,
                badge: null,
              },
              {
                name: "Plano Profissional",
                price: "990",
                impl: "3.000",
                desc: "Para automatizar atendimento, qualificação e acompanhamento comercial.",
                feats: [
                  "Tudo do Plano Essencial",
                  "IA treinada para o negócio",
                  "Múltiplos fluxos de atendimento",
                  "Integração com formulário, CRM ou sistema interno",
                  "Recuperação de clientes e follow-up",
                  "Relatórios de atendimento e conversão",
                ],
                cta: "QUERO AUTOMATIZAR MINHAS VENDAS",
                highlight: true,
                badge: "MAIS ESCOLHIDO",
              },
              {
                name: "Plano Performance",
                price: "1.290",
                impl: "3.500",
                desc: "Para integrar atendimento, pedidos, pagamentos e sistemas internos.",
                feats: [
                  "Tudo do Plano Profissional",
                  "Integração com ERP, CRM ou banco de dados",
                  "Automação de pedidos e pagamentos",
                  "Follow-up e recuperação de oportunidades",
                  "Painel de acompanhamento",
                  "Reunião periódica de acompanhamento",
                ],
                cta: "FALAR COM UM ESPECIALISTA",
                highlight: false,
                badge: null,
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`relative p-8 border transition-colors ${p.highlight ? "border-foreground bg-foreground text-background" : "border-border bg-card"}`}
              >
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] uppercase tracking-[0.25em] px-4 py-1.5">
                    {p.badge}
                  </div>
                )}
                <div className={`uppercase tracking-[0.3em] text-[11px] ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>{p.name}</div>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className={`text-sm ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>R$</span>
                  <span className="text-5xl font-light">{p.price}</span>
                  <span className={`text-sm ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>/mês</span>
                </div>
                <div className={`mt-2 text-sm font-light ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>
                  Implantação: R$ {p.impl}
                </div>
                <p className={`mt-4 text-sm font-light ${p.highlight ? "text-background/80" : "text-muted-foreground"}`}>{p.desc}</p>
                <ul className="mt-6 space-y-3">
                  {p.feats.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-light">
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.highlight ? "text-background" : "text-brand"}`} /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className={`mt-8 block text-center text-[11px] uppercase tracking-[0.2em] py-4 border transition ${
                    p.highlight ? "border-background hover:bg-background hover:text-foreground" : "border-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className={sectionPad}>
        <div className={`${container} grid md:grid-cols-2 gap-12 lg:gap-20`}>
          <div>
            <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Contato</div>
            <div className="mt-5 h-px w-12 bg-border" />
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Descubra onde sua empresa está perdendo oportunidades.
            </h2>
            <p className="mt-6 text-muted-foreground font-light">
              Conte como funciona seu atendimento e avaliaremos o que pode ser automatizado.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <Instagram className="h-4 w-4" /> @atendevende
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert("Recebemos sua solicitação. Nossa equipe entrará em contato para entender melhor sua operação."); }}
            className="space-y-5"
          >
            {[
              { name: "nome", ph: "Nome", type: "text" },
              { name: "empresa", ph: "Empresa", type: "text" },
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
            <button className="mt-4 inline-flex items-center gap-3 bg-brand text-white text-[11px] uppercase tracking-[0.22em] font-medium px-7 py-4 hover:bg-brand/90 transition">
              Solicitar diagnóstico <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className={`${container} py-8 flex flex-col md:flex-row items-center justify-between gap-4`}>
          <div className="flex items-center gap-2.5">
            <img src={logo.url} alt="Atende&Vende" className="h-7 w-7 object-contain" />
            <span className="text-sm font-medium">Atende<span className="text-brand">&</span>Vende</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <a href="#como-funciona" className="hover:text-foreground transition">Como funciona</a>
            <a href="#planos" className="hover:text-foreground transition">Planos</a>
            <a href="#contato" className="hover:text-foreground transition">Contato</a>
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

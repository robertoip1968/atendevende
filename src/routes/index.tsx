import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Instagram, Check, ArrowRight, MessageSquare, Cog, Repeat, Users, Clock3, Timer, UserCheck, CalendarCheck, Send, Calendar, Database, CreditCard, Server } from "lucide-react";
import atendimentoImg from "@/assets/atendimento.jpg";
import atendimentoVendasVideo from "@/assets/demo-atendimento-vendas.mp4.asset.json";
import { ChatWidget } from "@/components/ChatWidget";
import { DiferencialSection } from "@/components/DiferencialSection";

import { openChatAgent } from "@/lib/chat-agent";

const impactos = [
  {
    titulo: "Leads sem conversão",
    pergunta: "Quantos interessados não chegam a virar clientes?",
    impacto: "Investimento em divulgação desperdiçado.",
  },
  {
    titulo: "Orçamentos esquecidos",
    pergunta: "Quantas propostas ficam sem acompanhamento?",
    impacto: "Vendas próximas da decisão são perdidas.",
  },
  {
    titulo: "Horários ociosos",
    pergunta: "Quantos horários deixam de gerar atendimento?",
    impacto: "Capacidade disponível sem gerar receita.",
  },
  {
    titulo: "Equipe sobrecarregada",
    pergunta: "Quanto tempo é gasto em tarefas repetitivas?",
    impacto: "Menos tempo para atender, negociar e vender.",
  },
];

const demos = [
  {
    id: "agendamento",
    tab: "Agendamento",
    video: "/videos/demo-agendamento.mp4",
    titulo: "Do primeiro contato ao horário confirmado",
    chat: [
      { from: "cliente", text: "Olá! Quero agendar uma avaliação." },
      { from: "ia", text: "Claro. Tenho terça às 14h ou quarta às 9h. Qual horário prefere?" },
      { from: "cliente", text: "Quarta às 9h." },
      { from: "ia", text: "Agendamento confirmado. Vou enviar os dados e a confirmação." },
    ],
    etapas: ["Entende a solicitação", "Consulta a agenda", "Registra o horário", "Confirma ou transfere"],
    resultado: "Menos mensagens e mais agendamentos concluídos.",
    cta: "Quero aplicar na minha clínica",
    contexto: { origem: "demonstração", interesse: "agendamento", segmento: "saúde" },
  },
  {
    id: "vendas",
    tab: "Atendimento e vendas",
    video: atendimentoVendasVideo.url,
    titulo: "Da consulta ao orçamento ou pedido",
    chat: [
      { from: "cliente", text: "Olá! Vocês têm este produto?" },
      { from: "ia", text: "Sim. Posso consultar o preço e montar o orçamento. Qual quantidade você precisa?" },
      { from: "cliente", text: "Preciso de 10 unidades." },
      { from: "ia", text: "Orçamento preparado. Posso registrar o pedido ou encaminhar para um vendedor." },
    ],
    etapas: ["Identifica a necessidade", "Consulta produto e preço", "Gera orçamento ou pedido", "Acompanha ou transfere"],
    resultado: "A conversa avança até uma ação comercial.",
    cta: "Quero aplicar na minha empresa",
    contexto: { origem: "demonstração", interesse: "vendas" },
  },
];




const logo = "/images/atende-vende-logo.png";
const vendasImg = "/images/vendas-whatsapp.png";
const automacaoImg = "/images/automacao-agente.png";
const heroRobot = "/images/hero-robot.png";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [demo, setDemo] = useState(0);
  const integracoesRef = useRef<HTMLElement | null>(null);
  const [integrationsVisible, setIntegrationsVisible] = useState(false);

  useEffect(() => {
    const el = integracoesRef.current;
    if (!el || integrationsVisible) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIntegrationsVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [integrationsVisible]);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "O ATENDE&VENDE" },
    { href: "#demonstracoes", label: "Demonstrações" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#planos", label: "Planos" },
    { href: "#contato", label: "Contato" },
  ];

  const container = "max-w-[1240px] mx-auto px-5 md:px-8 lg:px-12";
  const sectionPad = "py-14 md:py-18 lg:py-22";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero + header that scrolls together over the image */}
      <section id="inicio" className="relative min-h-[78vh] w-full overflow-hidden">
        <img
          src={heroRobot}
          alt="Interface Atende&Vende conduzindo uma conversa pelo WhatsApp"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/40" aria-hidden />
        <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-black/50 to-transparent" aria-hidden />

        {/* Header — scrolls naturally, image shows through */}
        <header className="relative z-50 py-3">
          <div className={`${container} flex items-center justify-between`}>
            <a href="#inicio" className="flex items-center gap-4">
              <img src={logo} alt="Atende&Vende" className="h-14 w-14 object-contain" />
              <span className="font-semibold text-2xl tracking-tight text-white drop-shadow">
                Atende<span className="text-brand">&</span>Vende
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm uppercase tracking-[0.18em] font-medium text-white/90 hover:text-white transition-colors drop-shadow"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              className="lg:hidden inline-flex items-center justify-center p-2 text-white drop-shadow"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile nav */}
          {menuOpen && (
            <div className="lg:hidden border-t border-white/20 bg-black/80 backdrop-blur">
              <nav className={`${container} py-4 flex flex-col gap-4`}>
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm uppercase tracking-[0.18em] font-medium text-white/90 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </header>

        <div className={`relative flex flex-col items-start justify-center ${container} pt-8 md:pt-10 pb-16 md:pb-12 min-h-[calc(78vh-72px)]`}>
          <div className="uppercase tracking-[0.28em] text-[11px] text-white/90 font-medium">
            IA PARA ATENDIMENTO E VENDAS NO WHATSAPP
          </div>
          <h1 className="mt-5 text-white font-light tracking-tight text-[1.35rem] md:text-[1.9rem] lg:text-[2.5rem] leading-[1.12] max-w-[18ch] md:max-w-xl lg:max-w-2xl drop-shadow-sm">
            Transforme conversas em agendamentos, pedidos e vendas.
          </h1>
          <p className="mt-5 text-white/90 text-base md:text-lg lg:text-xl max-w-2xl font-light leading-relaxed drop-shadow-sm">
            O Atende&Vende atende 24/7, consulta informações, executa processos e acompanha cada oportunidade até a conclusão.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 md:gap-4">
            <a
              href="#demonstracoes"
              className="inline-flex items-center gap-2 bg-brand text-white text-[11px] uppercase tracking-[0.2em] font-medium px-5 md:px-7 py-3.5 md:py-4 hover:bg-brand/90 transition"
            >
              VER DEMONSTRAÇÃO <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#impacto"
              className="inline-flex items-center gap-2 border border-white/70 text-white text-[11px] uppercase tracking-[0.2em] font-medium px-4 md:px-7 py-3.5 md:py-4 hover:bg-white hover:text-foreground transition text-center leading-tight"
            >
              IDENTIFICAR OPORTUNIDADES PERDIDAS
            </a>
          </div>

          <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-x-4 md:gap-x-5 gap-y-2 text-white/80 text-[11px] uppercase tracking-[0.18em]">
            {[
              "Atendimento 24/7",
              "Texto e áudio",
              "Agendamentos e vendas",
              "Integrações",
            ].map((item, idx, arr) => (
              <span key={item} className="inline-flex items-center gap-2">
                {item}
                {idx < arr.length - 1 && <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-white/40" aria-hidden />}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto */}
      <section id="impacto" className={sectionPad}>
        <div className={container}>
          <div className="max-w-3xl">
            <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">
              O impacto no seu negócio
            </div>
            <div className="mt-5 h-px w-12 bg-border" />
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Você sabe quantas oportunidades perde pelo caminho?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed">
              Falhas no atendimento afetam vendas, agenda e produtividade.
            </p>
          </div>

          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {impactos.map((card) => (
              <article
                key={card.titulo}
                className="border-t-2 border-brand bg-card px-5 py-5 flex flex-col h-full"
              >
                <h3 className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {card.titulo}
                </h3>
                <p className="mt-3 text-base font-light leading-snug tracking-tight">
                  {card.pergunta}
                </p>
                <p className="mt-auto pt-4 text-xs text-muted-foreground font-light leading-snug">
                  {card.impacto}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 border-y border-border py-5 text-center text-sm md:text-base font-light text-muted-foreground">
            O Atende&amp;Vende responde, acompanha, agenda e conduz cada oportunidade até a próxima ação.
          </div>


          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() =>
                openChatAgent({
                  origem: "seção impacto",
                  interesse: "diagnóstico de oportunidades perdidas",
                })
              }
              className="inline-flex items-center gap-2 bg-brand text-white text-[11px] uppercase tracking-[0.2em] font-medium px-7 py-4 hover:bg-brand/90 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              ANALISAR MEU ATENDIMENTO <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>



      {/* Diferencial */}
      <DiferencialSection container={container} sectionPad={sectionPad} />


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

      {/* Demonstrações */}
      <section id="demonstracoes" className={sectionPad}>
        <div className={container}>
          <div className="max-w-2xl">
            <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Na prática</div>
            <div className="mt-5 h-px w-12 bg-border" />
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Veja como uma conversa vira resultado
            </h2>
            <p className="mt-5 text-muted-foreground font-light">
              Escolha um exemplo e acompanhe o processo.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Demonstrações">
            {demos.map((d, i) => (
              <button
                key={d.id}
                role="tab"
                id={`tab-${d.id}`}
                aria-selected={demo === i}
                aria-controls={`panel-${d.id}`}
                onClick={() => setDemo(i)}
                className={`px-5 py-2.5 text-sm tracking-tight border transition ${
                  demo === i
                    ? "border-brand text-brand bg-brand/5"
                    : "border-border text-muted-foreground hover:border-foreground/40"
                }`}
              >
                {d.tab}
              </button>
            ))}
          </div>

          {demos.map((d, i) =>
            demo !== i ? null : (
              <div
                key={d.id}
                role="tabpanel"
                id={`panel-${d.id}`}
                aria-labelledby={`tab-${d.id}`}
                className="mt-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
              >
                {/* Conversa */}
                <div className="border border-border bg-muted/30 p-4 md:p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Simulação de funcionamento
                  </div>
                  {"video" in d && d.video ? (
                    <div className="mt-4 flex justify-center">
                      <video
                        src={d.video}
                        className="h-[500px] md:h-[575px] w-auto max-w-full rounded-lg border border-border object-contain bg-black"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      />
                    </div>
                  ) : (
                  <div className="mt-4 space-y-2.5">
                    {d.chat.map((m, k) => (
                      <div
                        key={k}
                        className={`flex ${m.from === "cliente" ? "justify-start" : "justify-end"} motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1`}
                        style={{ animationDelay: `${k * 90}ms`, animationFillMode: "both" }}
                      >
                        <div
                          className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed border ${
                            m.from === "cliente"
                              ? "bg-card border-border rounded-2xl rounded-bl-sm"
                              : "bg-brand/10 border-brand/30 rounded-2xl rounded-br-sm"
                          }`}
                        >
                          {m.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  )}
                </div>

                {/* Etapas + resultado */}
                <div>
                  <h3 className="text-xl md:text-2xl font-light tracking-tight">{d.titulo}</h3>
                  <ol className="mt-6 space-y-3">
                    {d.etapas.map((e, k) => (
                      <li key={e} className="flex items-center gap-3 text-sm">
                        <span className="shrink-0 h-6 w-6 rounded-full border border-brand text-brand text-[11px] flex items-center justify-center">
                          {k + 1}
                        </span>
                        <span className="font-light">{e}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-6 text-sm text-muted-foreground font-light border-l-2 border-brand pl-3">
                    {d.resultado}
                  </p>
                  <button
                    onClick={() => openChatAgent(d.contexto)}
                    className="mt-7 inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-xs tracking-[0.15em] uppercase hover:opacity-90 transition"
                  >
                    {d.cta} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ),
          )}
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
              { tag: "Vendas", title: "Vendas e pedidos", desc: "Gera orçamentos, efetua vendas, gera pedidos, pedidos, pagamentos e executa follow-up.", image: vendasImg },
              { tag: "Automação", title: "Automação", desc: "Automatiza processos internos e faz integração com os sistemas da empresa.", image: automacaoImg },
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

      {/* Integrações */}
      <section
        id="integracoes"
        ref={integracoesRef}
        className={`${sectionPad} bg-muted/20 border-y border-border ${integrationsVisible ? "av-conn-active" : ""}`}
      >
        <div className={container}>
          <div className="max-w-3xl">
            <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Operação conectada</div>
            <div className="mt-5 h-px w-12 bg-border" />
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Conectado aos seus processos. Visível na gestão.
            </h2>
            <p className="mt-5 text-muted-foreground font-light leading-relaxed max-w-2xl">
              A solução pode consultar sistemas, registrar ações e organizar os principais indicadores do atendimento.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Painel 1 — Integrações */}
            <div className="bg-card border border-border p-6 md:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full border border-brand/30 flex items-center justify-center">
                  <Server className="h-4 w-4 text-brand" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-medium tracking-tight">Integrações</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground font-light leading-relaxed">
                O atendimento pode consultar e registrar informações nas ferramentas utilizadas pela empresa.
              </p>

              <div className="mt-8 relative">
                {/* Linha de conexão decorativa */}
                <div
                  className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  aria-hidden
                >
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <line
                      x1="50%"
                      y1="50%"
                      x2="50%"
                      y2="50%"
                      className="av-conn-line"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>

                <div className="relative grid grid-cols-2 gap-4">
                  {[
                    { icon: Calendar, label: "Agenda" },
                    { icon: Database, label: "ERP ou CRM" },
                    { icon: CreditCard, label: "Pagamentos" },
                    { icon: Server, label: "Banco de dados" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center text-center gap-3 rounded-lg border border-border bg-background p-4"
                    >
                      <item.icon className="h-5 w-5 text-brand" strokeWidth={1.5} />
                      <span className="text-xs md:text-sm font-medium tracking-tight">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Painel 2 — Acompanhamento */}
            <div className="bg-card border border-border p-6 md:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full border border-brand/30 flex items-center justify-center">
                  <Clock3 className="h-4 w-4 text-brand" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-medium tracking-tight">Acompanhamento</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground font-light leading-relaxed">
                Informações importantes da operação podem ser organizadas para análise.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: MessageSquare, label: "Atendimentos" },
                  { icon: CalendarCheck, label: "Agendamentos e pedidos" },
                  { icon: Repeat, label: "Follow-ups" },
                  { icon: Users, label: "Transferências para a equipe" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-start gap-3 rounded-lg border border-border bg-background p-4"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-brand" strokeWidth={1.5} />
                      <span className="h-1.5 w-12 rounded-full bg-brand/20 overflow-hidden">
                        <span className="block h-full w-2/3 bg-brand/50" />
                      </span>
                    </div>
                    <span className="text-xs md:text-sm font-medium tracking-tight leading-snug">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground font-light">
            As integrações e os indicadores disponíveis dependem da configuração do projeto e do acesso técnico aos sistemas utilizados.
          </p>
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
            <img src={logo} alt="Atende&Vende" className="h-7 w-7 object-contain" />
            <span className="text-sm font-medium">Atende<span className="text-brand">&</span>Vende</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <a href="#demonstracoes" className="hover:text-foreground transition">Demonstrações</a>
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

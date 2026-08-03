import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Instagram, Check, ArrowRight, MessageSquare, Repeat, Users, Clock3, Timer, UserCheck, CalendarCheck, Send, Calendar, Database, CreditCard, Server, HeartPulse, ShoppingBag, Briefcase } from "lucide-react";
import atendimentoVendasVideo from "@/assets/demo-atendimento-vendas.mp4.asset.json";
import capturaAgendamento from "@/assets/captura-agendamento.png.asset.json";
import capturaDashboard from "@/assets/captura-dashboard.png.asset.json";

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
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

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





      {/* Diferencial */}
      <DiferencialSection container={container} sectionPad={sectionPad} />




      {/* Soluções por segmento */}
      <section id="segmentos" className={`${sectionPad} bg-muted/30 border-y border-border`}>
        <div className={container}>
          <div className="max-w-2xl">
            <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Soluções por segmento</div>
            <div className="mt-5 h-px w-12 bg-border" />
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight">
              Adaptado ao processo da sua empresa
            </h2>
            <p className="mt-5 text-muted-foreground font-light leading-relaxed">
              Agendamento, vendas e atendimento configurados conforme as regras de cada operação.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                icon: HeartPulse,
                title: "Área da Saúde",
                desc: "Consulta informações, valores e horários, coleta dados e confirma o agendamento.",
                apps: "Clínicas, consultórios, laboratórios e centros de diagnóstico.",
                tags: ["Agendamento", "Confirmação", "Reagendamento"],
                featured: true,
                bg: "/images/seg-saude.jpg",
                contexto: { origem: "segmentos", segmento: "saúde", interesse: "agendamento" },
              },
              {
                icon: ShoppingBag,
                title: "Comércio e vendas",
                desc: "Consulta produtos, gera orçamentos, registra pedidos e acompanha oportunidades.",
                apps: "Lojas, distribuidoras, autopeças, atacadistas e agronegócio.",
                tags: ["Catálogo", "Orçamento", "Pedido"],
                featured: false,
                bg: "/images/seg-comercio.jpg",
                contexto: { origem: "segmentos", segmento: "comércio", interesse: "vendas" },
              },
              {
                icon: Briefcase,
                title: "Empresas de serviços",
                desc: "Qualifica o interessado, coleta informações e agenda reuniões, visitas ou atendimentos.",
                apps: "Imobiliárias, escolas, consultorias, escritórios e assistência técnica.",
                tags: ["Qualificação", "Agendamento", "Direcionamento"],
                featured: false,
                bg: "/images/seg-servicos.jpg",
                contexto: { origem: "segmentos", segmento: "serviços", interesse: "atendimento" },
              },
            ].map((s) => (
              <article
                key={s.title}
                className={`relative overflow-hidden bg-card border border-border ${s.featured ? "border-t-4 border-t-brand" : "border-t-4 border-t-border"} p-7 flex flex-col shadow-sm group`}
              >
                <img
                  src={s.bg}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-500"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-card/70 via-card/85 to-card/95" aria-hidden />
                <div className="relative flex flex-col h-full">
                  <s.icon className="h-6 w-6 text-brand" />
                  <h3 className="mt-5 text-xl font-medium tracking-tight leading-tight text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed">{s.desc}</p>
                  <p className="mt-3 text-xs text-muted-foreground/80 font-light leading-relaxed">{s.apps}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-1 rounded-full border border-border bg-muted/60 text-foreground/80">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => openChatAgent(s.contexto)}
                    className="mt-auto pt-7 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-semibold text-brand hover:gap-3 transition-all self-start"
                  >
                    Ver aplicação <ArrowRight className="h-4 w-4" />
                  </button>
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

          <div className="mt-12 grid gap-6 lg:gap-8">
            {[
              {
                titulo: "Integrações",
                texto:
                  "Consulte disponibilidade, registre ações e mantenha o processo conectado à operação.",
                img: capturaAgendamento.url,
                alt: "Tela demonstrativa de agenda com horários e agendamentos genéricos",
                tags: ["Agenda", "Horários", "Agendamentos", "Operação"],
              },
              {
                titulo: "Acompanhamento",
                texto:
                  "Acompanhe atendimentos, oportunidades, agendamentos e follow-ups em um único lugar.",
                img: capturaDashboard.url,
                alt: "Painel gerencial demonstrativo com indicadores de atendimento e vendas",
                tags: ["Atendimentos", "Oportunidades", "Follow-ups", "Gestão"],
              },
            ].map((p) => (
              <div key={p.titulo} className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
                <h3 className="text-lg md:text-xl font-medium tracking-tight">{p.titulo}</h3>
                <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed">{p.texto}</p>

                <button
                  type="button"
                  onClick={() => setZoom({ src: p.img, alt: p.alt })}
                  className="mt-6 block w-full overflow-hidden rounded-lg border border-border bg-background shadow-sm"
                  aria-label={`Ampliar visual — ${p.titulo}`}
                >
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    width={1600}
                    height={1008}
                    className="w-full h-auto object-cover"
                  />
                </button>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] tracking-wide px-2.5 py-1 rounded-full border border-border bg-muted/40 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setZoom({ src: p.img, alt: p.alt })}
                  className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-brand hover:opacity-80 transition"
                >
                  Ampliar visual <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground font-light">
            Imagens meramente demonstrativas. As integrações e os indicadores disponíveis dependem da configuração do projeto e do acesso técnico aos sistemas utilizados.
          </p>
        </div>

        {zoom && (
          <div
            className="fixed inset-0 z-[70] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setZoom(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setZoom(null)}
                aria-label="Fechar"
                className="absolute -top-11 right-0 h-9 w-9 rounded-full bg-white text-foreground flex items-center justify-center shadow"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img src={zoom.src} alt={zoom.alt} className="w-full h-auto max-h-[80vh] object-contain rounded-lg bg-white" />
            </div>
          </div>
        )}

      </section>

      {/* Planos */}
      <section id="planos" className={`${sectionPad} bg-muted/30 border-y border-border`}>
        <div className={container}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Planos</div>
            <div className="mt-5 h-px w-12 bg-border mx-auto" />
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight">Escolha a solução ideal para sua operação</h2>
            <p className="mt-5 text-muted-foreground font-light leading-relaxed">
              Comece com um processo objetivo ou construa uma solução integrada às necessidades da sua empresa.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6 items-stretch lg:pr-16 xl:pr-24">
            {[
              {
                name: "Plano Essencial",
                price: "R$ 790/mês",
                impl: "Implantação: R$ 2.500",
                desc: "Para empresas que querem automatizar um processo principal de atendimento.",
                feats: [
                  "1 número de WhatsApp",
                  "Atendimento automatizado 24/7",
                  "Respostas sobre produtos e serviços",
                  "Captura e qualificação de leads",
                  "Um processo principal personalizado",
                  "Suporte técnico em horário comercial",
                ],
                cta: "SOLICITAR DIAGNÓSTICO",
                highlight: false,
                badge: null,
                contexto: { origem: "planos", plano: "essencial" },
              },
              {
                name: "Plano Performance",
                price: "R$ 1.290/mês",
                impl: "Implantação: R$ 3.500",
                desc: "Para empresas que querem automatizar atendimento, vendas e acompanhamento de oportunidades.",
                feats: [
                  "Tudo do Plano Essencial",
                  "IA configurada com as informações e regras da empresa",
                  "Atendimento, agendamento, orçamento ou pedidos",
                  "Follow-up de clientes e oportunidades",
                  "Integração com sistemas prevista no escopo técnico",
                  "Relatórios ou painel de acompanhamento",
                ],
                cta: "SOLICITAR DIAGNÓSTICO",
                highlight: true,
                badge: "MAIS COMPLETO",
                contexto: { origem: "planos", plano: "performance" },
              },
              {
                name: "Plano Enterprise",
                price: "PROJETO PERSONALIZADO",
                impl: "Implantação e mensalidade sob consulta",
                desc: "Para empresas com múltiplas operações, alto volume de atendimento ou necessidade de integrações e processos personalizados.",
                feats: [
                  "Múltiplos números, unidades ou equipes",
                  "Processos personalizados para diferentes operações",
                  "Integrações avançadas com APIs e sistemas internos",
                  "Regras específicas por unidade ou área",
                  "Painéis e indicadores personalizados",
                  "Acompanhamento técnico e estratégico",
                ],
                cta: "FALAR SOBRE MEU PROJETO",
                highlight: false,
                badge: null,
                contexto: { origem: "planos", plano: "enterprise", interesse: "projeto personalizado" },
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`relative p-8 border transition-colors flex flex-col ${p.highlight ? "border-foreground bg-foreground text-background shadow-xl" : "border-border bg-card"}`}
              >
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] uppercase tracking-[0.25em] px-4 py-1.5">
                    {p.badge}
                  </div>
                )}
                <div className={`uppercase tracking-[0.3em] text-[11px] ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>{p.name}</div>
                <div className="mt-5 flex items-baseline gap-1 min-h-[3rem]">
                  {p.price.startsWith("R$") ? (
                    <>
                      <span className={`text-sm ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>R$</span>
                      <span className="text-4xl md:text-5xl font-light">{p.price.replace("R$ ", "").replace("/mês", "")}</span>
                      <span className={`text-sm ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>/mês</span>
                    </>
                  ) : (
                    <span className="text-xl md:text-2xl font-medium tracking-tight uppercase">{p.price}</span>
                  )}
                </div>
                <div className={`mt-2 text-sm font-light ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>{p.impl}</div>
                <p className={`mt-4 text-sm font-light ${p.highlight ? "text-background/80" : "text-muted-foreground"}`}>{p.desc}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {p.feats.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-light">
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.highlight ? "text-background" : "text-brand"}`} /> {f}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => openChatAgent(p.contexto)}
                  className={`mt-8 block w-full text-center text-[11px] uppercase tracking-[0.2em] py-4 border transition ${
                    p.highlight ? "border-background hover:bg-background hover:text-foreground" : "border-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto text-center space-y-2 text-sm text-muted-foreground font-light">
            <p>Atendimento automatizado aos clientes: disponível 24 horas por dia.</p>
            <p>Escopo, integrações, implantação e suporte são definidos após avaliação técnica.</p>
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

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Instagram,
  Check,
  ArrowRight,
  Menu,
  X,
  MessageSquare,
  Clock,
  Layers,
  Users,
  UserX,
  BarChart3,
  MessageCircle,
  Brain,
  Cog,
  Repeat,
  UserCheck,
  ClipboardList,
  Zap,
  Filter,
  Route as RouteIcon,
  Plug,
  LineChart,
  ShieldCheck,
  Headset,
  ShoppingCart,
  CalendarCheck,
  Workflow,
  Building2,
  Store,
  Plus,
  Minus,
} from "lucide-react";
import logo from "@/assets/atende-vende-logo.asset.json";
import heroRobot from "@/assets/hero-robot.png.asset.json";
import { ChatWidget } from "@/components/ChatWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atende&Vende | Atendimento, Agendamentos, Vendas e Automação" },
      {
        name: "description",
        content:
          "Automatize atendimento, qualificação, agendamentos, pedidos e acompanhamento comercial com o Atende&Vende.",
      },
      { property: "og:title", content: "Atende&Vende — Da primeira mensagem ao resultado" },
      {
        property: "og:description",
        content:
          "Organize atendimentos, qualifique clientes, automatize processos e acompanhe oportunidades.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const navLinks = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#segmentos", label: "Segmentos" },
  { href: "#integracoes", label: "Integrações" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "Perguntas frequentes" },
];

function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-background/95 backdrop-blur border-b border-border py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between gap-6">
          <a href="#inicio" className="flex items-center gap-3 shrink-0">
            <img src={logo.url} alt="Atende&Vende" className="h-12 w-12 lg:h-14 lg:w-14 object-contain" />
            <span
              className={`font-semibold text-xl lg:text-2xl tracking-tight transition-colors ${
                scrolled || mobileOpen ? "text-foreground" : "text-white drop-shadow"
              }`}
            >
              Atende<span className="text-brand">&</span>Vende
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[13px] uppercase tracking-[0.18em] font-medium transition-colors ${
                  scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#diagnostico"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-brand text-primary-foreground text-xs uppercase tracking-[0.18em] font-semibold px-5 py-3 rounded-full shadow-glow hover:opacity-95 transition"
            >
              Solicitar diagnóstico
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className={`lg:hidden h-11 w-11 flex items-center justify-center rounded-full border transition ${
                scrolled || mobileOpen
                  ? "border-border text-foreground"
                  : "border-white/40 text-white"
              }`}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm uppercase tracking-[0.18em] font-medium text-foreground/80 hover:text-foreground py-2"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#diagnostico"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-brand text-primary-foreground text-xs uppercase tracking-[0.18em] font-semibold px-5 py-3.5 rounded-full"
              >
                Solicitar diagnóstico
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative min-h-[86vh] w-full overflow-hidden pt-24">
        <img
          src={heroRobot.url}
          alt="Atendimento comercial automatizado com Atende&Vende"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" aria-hidden />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col justify-center min-h-[70vh]">
          <div className="max-w-3xl animate-[fadeIn_0.6s_ease-out]">
            <div className="uppercase tracking-[0.24em] text-[11px] md:text-xs text-white/80 font-medium">
              Atendimento, vendas e acompanhamento pelo WhatsApp
            </div>
            <h1 className="mt-6 text-white font-light tracking-tight text-3xl md:text-5xl lg:text-6xl leading-[1.05]">
              Não deixe clientes esperando —{" "}
              <span className="text-white/90">nem oportunidades de venda esquecidas.</span>
            </h1>
            <p className="mt-6 text-white/95 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              O Atende&Vende responde, qualifica, acompanha e conduz cada cliente até o próximo passo:
              orçamento, agendamento, pedido ou venda.
            </p>
            <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl font-light leading-relaxed">
              Quando sua equipe precisa participar, recebe o histórico da conversa, a necessidade do
              cliente e o próximo passo recomendado.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#diagnostico"
                className="inline-flex items-center justify-center gap-2 bg-gradient-brand text-primary-foreground text-sm font-semibold px-7 py-4 rounded-full shadow-glow hover:opacity-95 transition"
              >
                Solicitar diagnóstico comercial <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/40 text-white text-sm font-semibold px-7 py-4 rounded-full hover:bg-white/20 transition"
              >
                Ver como funciona
              </a>
            </div>

            <p className="mt-6 text-white/70 text-sm max-w-xl">
              Atendimento 24/7, acompanhamento automático e integração com os sistemas da sua empresa.
            </p>
          </div>

          <a
            href="#oportunidades-perdidas"
            aria-label="Rolar para a próxima seção"
            className="hidden md:inline-flex mt-14 flex-col items-start gap-2 text-white/80 hover:text-white uppercase tracking-[0.25em] text-[11px]"
          >
            Continue
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Onde as empresas perdem vendas */}
      <section id="oportunidades-perdidas" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[0.3em] text-[11px] text-brand font-semibold">
              Oportunidades perdidas
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight text-foreground">
              Seu problema pode não ser falta de clientes.{" "}
              <span className="text-foreground/70">Pode ser falta de acompanhamento.</span>
            </h2>
            <p className="mt-6 text-foreground/70 text-lg font-light leading-relaxed">
              Muitas empresas recebem mensagens todos os dias, mas perdem oportunidades entre a primeira
              resposta e a decisão do cliente.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MessageSquare, t: "Mensagens sem resposta", d: "O cliente procura outra empresa antes que sua equipe consiga atendê-lo." },
              { icon: Clock, t: "Conversas sem continuidade", d: "A empresa responde, mas ninguém acompanha o cliente até a decisão." },
              { icon: Layers, t: "Informações espalhadas", d: "Conversas, pedidos, planilhas e sistemas não estão conectados." },
              { icon: Users, t: "Equipe sobrecarregada", d: "Vendedores gastam tempo respondendo repetidamente às mesmas perguntas." },
              { icon: UserX, t: "Clientes esquecidos", d: "Oportunidades interessadas desaparecem porque ninguém realiza o próximo contato." },
              { icon: BarChart3, t: "Gestão sem visibilidade", d: "O gestor não sabe quantas oportunidades avançaram, pararam ou foram perdidas." },
            ].map((c) => (
              <div
                key={c.t}
                className="group p-8 bg-card border border-border rounded-lg hover:border-brand hover:shadow-card transition-all"
              >
                <c.icon className="h-7 w-7 text-brand" strokeWidth={1.4} />
                <h3 className="mt-5 text-lg font-semibold text-foreground">{c.t}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 md:p-10 bg-gradient-brand rounded-lg text-primary-foreground text-center shadow-glow">
            <p className="text-lg md:text-2xl font-light leading-snug max-w-3xl mx-auto">
              O Atende&Vende transforma mensagens soltas em uma{" "}
              <span className="font-semibold">operação comercial organizada e acompanhada</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Mais do que responder mensagens */}
      <section className="py-24 lg:py-32 bg-muted/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[0.3em] text-[11px] text-brand font-semibold">
              Nossa proposta
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Muito mais do que responder mensagens.
            </h2>
            <p className="mt-6 text-foreground/75 text-lg font-light leading-relaxed">
              O problema não é apenas demorar para responder. O problema é perder o controle sobre o
              que acontece depois da resposta.
            </p>
            <p className="mt-4 text-foreground/75 text-base font-light leading-relaxed">
              O Atende&Vende acompanha cada oportunidade durante toda a jornada comercial. Ele entende
              o que o cliente procura, coleta as informações necessárias, consulta dados, executa
              tarefas e mantém o acompanhamento até que exista um resultado.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: MessageCircle, t: "Responde", d: "Atende clientes imediatamente por texto ou áudio." },
              { icon: Brain, t: "Entende", d: "Identifica a necessidade, o interesse e a etapa da conversa." },
              { icon: Cog, t: "Executa", d: "Consulta produtos, preços, serviços, disponibilidade, pedidos ou agenda." },
              { icon: Repeat, t: "Acompanha", d: "Realiza follow-ups e recupera oportunidades que pararam no caminho." },
              { icon: UserCheck, t: "Transfere", d: "Aciona sua equipe com o histórico completo e o próximo passo definido." },
              { icon: ClipboardList, t: "Registra", d: "Organiza os resultados e mostra onde cada oportunidade está." },
            ].map((c) => (
              <div key={c.t} className="p-7 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center">
                    <c.icon className="h-5 w-5 text-brand" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-lg font-semibold">{c.t}</h3>
                </div>
                <p className="mt-4 text-sm text-foreground/75 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operação contínua */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="uppercase tracking-[0.3em] text-[11px] text-brand font-semibold">
            Operação comercial contínua
          </div>
          <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
            Uma operação comercial que continua funcionando mesmo quando sua equipe não está disponível.
          </h2>
          <p className="mt-6 text-foreground/75 text-lg font-light leading-relaxed">
            O Atende&Vende assume tarefas repetitivas, atende fora do horário, organiza informações e
            acompanha clientes. Sua equipe permanece no controle e participa das conversas que exigem
            negociação, análise ou decisão humana.
          </p>

          <div className="mt-12 p-8 md:p-10 border-l-4 border-brand bg-muted/50 rounded-r-lg text-left">
            <p className="text-xl md:text-2xl font-light leading-snug text-foreground">
              “A IA não substitui sua equipe. Ela evita que sua equipe trabalhe no escuro.”
            </p>
          </div>
        </div>
      </section>

      {/* Como funciona - Jornada */}
      <section id="como-funciona" className="py-24 lg:py-32 bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[0.3em] text-[11px] text-brand-2 font-semibold">
              Como funciona
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
              O cliente entra em contato.{" "}
              <span className="text-background/70">
                O Atende&Vende conduz o restante do caminho.
              </span>
            </h2>
          </div>

          <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Recebe a mensagem", d: "Texto, áudio, botão, formulário ou contato iniciado pelo WhatsApp." },
              { t: "Entende a necessidade", d: "Identifica o que o cliente procura e quais informações ainda estão faltando." },
              { t: "Consulta dados", d: "Busca produtos, serviços, preços, estoque, agenda ou informações no sistema." },
              { t: "Executa o processo", d: "Gera orçamento, agenda atendimento, monta pedido ou registra a oportunidade." },
              { t: "Acompanha", d: "Faz follow-up e recupera conversas que não foram concluídas." },
              { t: "Transfere quando necessário", d: "Encaminha para a equipe com contexto, histórico e próxima ação." },
              { t: "Registra o resultado", d: "Venda, pedido, agendamento, proposta, desistência ou motivo da perda." },
            ].map((s, i) => (
              <li
                key={s.t}
                className="relative p-6 bg-background/5 border border-background/15 rounded-lg hover:border-brand-2 transition"
              >
                <div className="text-xs uppercase tracking-[0.22em] text-brand-2 font-semibold">
                  Etapa {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
                <p className="mt-3 text-sm text-background/75 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="uppercase tracking-[0.3em] text-[11px] text-brand font-semibold">
              Benefícios
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight">
              Tudo o que sua operação precisa para atender, acompanhar e vender melhor.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, t: "Respostas imediatas", d: "Atenda clientes em segundos, inclusive fora do horário comercial." },
              { icon: Filter, t: "Qualificação automática", d: "Identifique interesse, necessidade, localização, orçamento e urgência." },
              { icon: RouteIcon, t: "Jornada organizada", d: "Saiba em que etapa está cada cliente e qual deve ser a próxima ação." },
              { icon: Repeat, t: "Follow-up automático", d: "Retome conversas paradas, propostas sem resposta e carrinhos abandonados." },
              { icon: UserCheck, t: "Transferência com contexto", d: "Sua equipe recebe o histórico, a necessidade do cliente e a ação recomendada." },
              { icon: Plug, t: "Integração com sistemas", d: "Consulte ou registre dados em ERP, CRM, agenda, banco de dados e formulários." },
              { icon: LineChart, t: "Indicadores comerciais", d: "Acompanhe volume, tempo de resposta, oportunidades, conversões e motivos de perda." },
              { icon: Users, t: "Atendimento híbrido", d: "A IA atua nas tarefas repetitivas e chama uma pessoa nas situações certas." },
              { icon: ShieldCheck, t: "Segurança e controle", d: "Mantenha registro das interações, permissões definidas e tratamento adequado dos dados." },
            ].map((b) => (
              <div key={b.t} className="p-7 bg-card border border-border rounded-lg hover:shadow-card transition">
                <b.icon className="h-7 w-7 text-brand" strokeWidth={1.4} />
                <h3 className="mt-5 text-lg font-semibold">{b.t}</h3>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section id="solucoes" className="py-24 lg:py-32 bg-muted/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="uppercase tracking-[0.3em] text-[11px] text-brand font-semibold">
              Soluções
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight">
              Soluções para cada etapa da sua operação.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Headset,
                cat: "Atendimento e relacionamento",
                d: "Respostas automáticas, suporte, dúvidas frequentes, triagem e encaminhamento para a equipe.",
                items: ["SAC", "Suporte", "Segunda via", "Consulta de status", "Informações sobre serviços", "Triagem inicial", "Atendimento fora do horário"],
              },
              {
                icon: ShoppingCart,
                cat: "Vendas e pedidos",
                d: "Qualificação de clientes, consulta de produtos, orçamento, carrinho, pedido, pagamento e acompanhamento.",
                items: ["Consulta de produtos", "Preços e disponibilidade", "Orçamentos", "Pedidos", "Pagamentos", "Recuperação de carrinho", "Follow-up comercial"],
              },
              {
                icon: CalendarCheck,
                cat: "Agendamentos",
                d: "Consulta de horários, coleta de informações, confirmação, reagendamento e lembretes.",
                items: ["Clínicas", "Consultórios", "Laboratórios", "Centros de diagnóstico", "Serviços técnicos", "Empresas com atendimento agendado"],
              },
              {
                icon: Workflow,
                cat: "Automação de processos",
                d: "Integração entre WhatsApp, formulários, CRM, ERP, pagamentos, bancos de dados e sistemas internos.",
                items: ["Atualização de cadastros", "Abertura de solicitações", "Consulta de informações", "Geração de documentos", "Integração de pedidos", "Notificações automáticas"],
              },
            ].map((s) => (
              <div key={s.cat} className="p-8 md:p-10 bg-card border border-border rounded-lg flex flex-col">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-brand/10 flex items-center justify-center">
                    <s.icon className="h-6 w-6 text-brand" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">{s.cat}</h3>
                </div>
                <p className="mt-5 text-foreground/75 leading-relaxed">{s.d}</p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-brand shrink-0 mt-0.5" /> {i}
                    </li>
                  ))}
                </ul>
                <a
                  href="#diagnostico"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
                >
                  Conhecer esta solução <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section id="segmentos" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="uppercase tracking-[0.3em] text-[11px] text-brand font-semibold">
              Segmentos
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight">
              Soluções adaptadas à realidade de cada operação.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Building2,
                t: "Clínicas, consultórios e centros de diagnóstico",
                d: "Atenda pacientes, esclareça dúvidas, consulte serviços, realize agendamentos e envie confirmações automaticamente.",
                items: ["Triagem de pacientes", "Consulta de serviços", "Agendamento", "Confirmação", "Reagendamento", "Lembretes", "Transferência para a equipe"],
                cta: "Conhecer a solução para clínicas",
              },
              {
                icon: Store,
                t: "Comércio, distribuidores e operações de pedidos",
                d: "Consulte produtos, gere orçamentos, registre pedidos, integre pagamentos e recupere oportunidades.",
                items: ["Consulta de catálogo", "Consulta de preços", "Orçamentos", "Montagem de pedidos", "Pagamentos", "Integração com ERP", "Recuperação de clientes"],
                cta: "Conhecer a solução para vendas",
              },
            ].map((s) => (
              <article
                key={s.t}
                className="p-8 md:p-10 bg-card border-t-4 border-brand shadow-sm hover:shadow-card transition rounded-lg flex flex-col"
              >
                <s.icon className="h-9 w-9 text-brand" strokeWidth={1.4} />
                <h3 className="mt-5 text-xl md:text-2xl font-semibold leading-tight">{s.t}</h3>
                <p className="mt-4 text-foreground/75 leading-relaxed">{s.d}</p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-brand shrink-0 mt-0.5" /> {i}
                    </li>
                  ))}
                </ul>
                <a
                  href="#diagnostico"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
                >
                  {s.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-foreground/70">
            Também atendemos imobiliárias, prestadores de serviços, educação, indústrias, assistência
            técnica e operações B2B.
          </p>
        </div>
      </section>

      {/* Integrações */}
      <section id="integracoes" className="py-24 lg:py-32 bg-muted/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[0.3em] text-[11px] text-brand font-semibold">
              Integrações
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
              O Atende&Vende trabalha conectado à sua operação.
            </h2>
            <p className="mt-6 text-foreground/75 text-lg font-light leading-relaxed">
              Não entregamos apenas respostas automáticas. Integramos o atendimento aos sistemas
              necessários para executar tarefas e registrar resultados.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              "WhatsApp", "Formulários", "CRM", "ERP", "Agenda", "Banco de dados",
              "Planilhas", "Pagamentos", "Sistemas internos", "E-mail", "APIs",
            ].map((i) => (
              <div
                key={i}
                className="p-5 bg-card border border-border rounded-lg text-center text-sm font-medium text-foreground hover:border-brand hover:text-brand transition"
              >
                {i}
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-foreground/70">
            As integrações disponíveis dependem do sistema utilizado, da existência de API e das
            regras do projeto.
          </p>
        </div>
      </section>

      {/* Implantação */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="uppercase tracking-[0.3em] text-[11px] text-brand font-semibold">
              Implantação
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight">
              Como colocamos o Atende&Vende para funcionar.
            </h2>
          </div>

          <div className="mt-16 relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border" />
            <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
              {[
                { t: "Diagnóstico", d: "Entendemos seu atendimento, suas regras, seus clientes e seus sistemas." },
                { t: "Desenho do processo", d: "Definimos o que será automatizado, o que continuará humano e como cada etapa funcionará." },
                { t: "Configuração e integração", d: "Criamos os fluxos, configuramos a IA e conectamos os sistemas necessários." },
                { t: "Testes", d: "Simulamos diferentes situações antes de colocar o processo em produção." },
                { t: "Implantação assistida", d: "Acompanhamos os primeiros atendimentos e corrigimos comportamentos." },
                { t: "Evolução contínua", d: "Analisamos os resultados e aprimoramos os fluxos." },
              ].map((s, i) => (
                <li key={s.t} className="relative">
                  <div className="relative z-10 h-16 w-16 rounded-full bg-gradient-brand text-primary-foreground flex items-center justify-center text-lg font-semibold shadow-glow mx-auto lg:mx-0">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-center lg:text-left">{s.t}</h3>
                  <p className="mt-2 text-sm text-foreground/75 leading-relaxed text-center lg:text-left">
                    {s.d}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Indicadores */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[0.3em] text-[11px] text-brand-2 font-semibold">
              Indicadores
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Resultados que sua empresa passa a acompanhar.
            </h2>
            <p className="mt-6 text-background/80 text-lg font-light leading-relaxed">
              O Atende&Vende não se limita à quantidade de mensagens respondidas. Ele ajuda a
              acompanhar os indicadores que mostram onde sua operação está avançando ou perdendo
              oportunidades.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Tempo médio de primeira resposta",
              "Atendimentos fora do horário",
              "Clientes qualificados",
              "Orçamentos enviados",
              "Follow-ups executados",
              "Agendamentos realizados",
              "Pedidos concluídos",
              "Oportunidades recuperadas",
              "Motivos de não conversão",
              "Transferências para a equipe humana",
            ].map((i) => (
              <div
                key={i}
                className="p-5 bg-background/5 border border-background/15 rounded-lg flex items-center gap-3"
              >
                <LineChart className="h-5 w-5 text-brand-2 shrink-0" strokeWidth={1.6} />
                <span className="text-sm text-background/90">{i}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-background/70">
            Os indicadores disponíveis dependem do escopo e das integrações do projeto.
          </p>
        </div>
      </section>

      {/* Diagnóstico comercial */}
      <section id="diagnostico" className="py-24 lg:py-32 bg-muted/40 border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[0.3em] text-[11px] text-brand font-semibold">
              Primeiro passo
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Descubra onde sua empresa está perdendo oportunidades.
            </h2>
            <p className="mt-6 text-foreground/75 text-lg font-light leading-relaxed">
              No diagnóstico comercial, avaliamos como sua empresa atende hoje, onde os clientes estão
              parando e quais processos podem ser automatizados.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Principais tipos de contato",
              "Perguntas repetidas",
              "Etapas do atendimento",
              "Oportunidades perdidas",
              "Tarefas manuais",
              "Integrações necessárias",
              "Papel da inteligência artificial",
              "Momento de participação humana",
              "Indicadores que devem ser acompanhados",
            ].map((i) => (
              <div key={i} className="flex items-start gap-3 text-foreground/85">
                <Check className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <span>{i}</span>
              </div>
            ))}
          </div>

          <a
            href="#contato"
            className="mt-10 inline-flex items-center gap-2 bg-gradient-brand text-primary-foreground text-sm font-semibold px-7 py-4 rounded-full shadow-glow hover:opacity-95 transition"
          >
            Solicitar diagnóstico comercial <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="uppercase tracking-[0.3em] text-[11px] text-brand font-semibold">
              Planos
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight">
              Escolha o nível de automação adequado à sua operação.
            </h2>
            <p className="mt-5 text-foreground/75 text-lg font-light leading-relaxed">
              Cada projeto é configurado de acordo com o processo, as integrações e o volume de
              atendimento.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 items-start">
            {[
              {
                name: "Plano Essencial",
                price: "R$ 790",
                per: "por mês",
                impl: "Implantação a partir de R$ 2.500",
                desc: "Para automatizar um processo principal de atendimento.",
                feats: [
                  "1 número de WhatsApp",
                  "1 fluxo principal",
                  "Atendimento automatizado com IA",
                  "Respostas sobre produtos ou serviços",
                  "Qualificação inicial",
                  "Histórico de atendimentos",
                  "Suporte em horário comercial",
                  "Uma integração simples, quando aplicável",
                ],
                cta: "Solicitar avaliação",
                highlight: false,
                badge: null,
              },
              {
                name: "Plano Profissional",
                price: "A partir de R$ 1.290",
                per: "por mês",
                impl: "Implantação a partir de R$ 3.500",
                desc: "Para operações que precisam automatizar atendimento, qualificação, acompanhamento e processos comerciais.",
                feats: [
                  "Tudo do Plano Essencial",
                  "Múltiplos fluxos",
                  "Follow-up automático",
                  "Agendamento ou orçamento",
                  "Integração com formulário, CRM ou sistema",
                  "Relatórios de atendimento",
                  "Ajustes mensais",
                  "Suporte prioritário",
                ],
                cta: "Solicitar proposta",
                highlight: true,
                badge: "MAIS ESCOLHIDO",
              },
              {
                name: "Plano Performance",
                price: "Sob consulta",
                per: "",
                impl: "Implantação personalizada",
                desc: "Para operações com pedidos, pagamentos, ERP, banco de dados e automações avançadas.",
                feats: [
                  "Tudo do Plano Profissional",
                  "Integração com ERP ou banco de dados",
                  "Automação de pedidos",
                  "Integração com pagamentos",
                  "Recuperação de oportunidades",
                  "Painel de acompanhamento",
                  "Monitoramento técnico",
                  "Melhoria contínua",
                  "Reuniões periódicas",
                ],
                cta: "Falar com um especialista",
                highlight: false,
                badge: null,
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`relative p-8 md:p-10 border rounded-lg transition-colors ${
                  p.highlight
                    ? "border-foreground bg-foreground text-background shadow-glow"
                    : "border-border bg-card"
                }`}
              >
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-brand text-primary-foreground text-[10px] uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full">
                    {p.badge}
                  </div>
                )}
                <div
                  className={`uppercase tracking-[0.28em] text-[11px] font-semibold ${
                    p.highlight ? "text-background/70" : "text-foreground/60"
                  }`}
                >
                  {p.name}
                </div>
                <div className="mt-6">
                  <div className="text-3xl md:text-4xl font-light leading-tight">{p.price}</div>
                  {p.per && (
                    <div
                      className={`mt-1 text-sm ${
                        p.highlight ? "text-background/70" : "text-foreground/60"
                      }`}
                    >
                      {p.per}
                    </div>
                  )}
                </div>
                <div
                  className={`mt-3 text-sm ${
                    p.highlight ? "text-background/70" : "text-foreground/70"
                  }`}
                >
                  {p.impl}
                </div>
                <p
                  className={`mt-5 text-sm leading-relaxed ${
                    p.highlight ? "text-background/85" : "text-foreground/80"
                  }`}
                >
                  {p.desc}
                </p>
                <ul className="mt-8 space-y-3">
                  {p.feats.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`h-4 w-4 mt-0.5 shrink-0 ${
                          p.highlight ? "text-background" : "text-brand"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className={`mt-10 block text-center text-xs uppercase tracking-[0.2em] font-semibold py-4 rounded-full transition ${
                    p.highlight
                      ? "bg-background text-foreground hover:opacity-90"
                      : "bg-gradient-brand text-primary-foreground hover:opacity-95"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center space-y-3 text-sm text-foreground/70">
            <p>
              Os valores podem variar conforme volume de mensagens, quantidade de fluxos, integrações,
              regras do processo e necessidade de infraestrutura.
            </p>
            <p>
              Custos de WhatsApp, modelos de inteligência artificial, disparos, licenças e serviços de
              terceiros podem ser cobrados separadamente.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 lg:py-32 bg-muted/40 border-y border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center">
            <div className="uppercase tracking-[0.3em] text-[11px] text-brand font-semibold">
              Perguntas frequentes
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight">
              Dúvidas sobre o Atende&Vende.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {[
              { q: "O Atende&Vende substitui minha equipe?", a: "Não. Ele assume tarefas repetitivas, organiza informações e atende fora do horário. Sua equipe continua responsável por situações que exigem negociação, análise ou decisão humana." },
              { q: "O atendimento funciona 24 horas?", a: "Sim. Os fluxos automatizados podem funcionar 24 horas por dia, respeitando as regras definidas para cada operação." },
              { q: "É possível transferir o atendimento para uma pessoa?", a: "Sim. O Atende&Vende pode identificar quando a participação humana é necessária e transferir a conversa com o histórico e o contexto." },
              { q: "O sistema entende mensagens de áudio?", a: "Sim. Conforme a configuração do projeto, mensagens de áudio podem ser transcritas, interpretadas e respondidas." },
              { q: "O Atende&Vende pode consultar meu sistema?", a: "Sim, desde que o sistema permita integração por API, banco de dados ou outro meio seguro de conexão." },
              { q: "Quanto tempo leva a implantação?", a: "O prazo depende do número de fluxos e integrações. Projetos completos podem levar até 60 dias, incluindo diagnóstico, configuração, testes e implantação assistida." },
              { q: "Existe taxa de implantação?", a: "Sim. A implantação cobre diagnóstico, configuração dos fluxos, treinamento da IA, integrações, testes e acompanhamento inicial." },
              { q: "Os custos do WhatsApp e da IA estão incluídos?", a: "Podem ser cobrados separadamente, conforme o volume de uso e os serviços contratados." },
              { q: "O Atende&Vende atende qualquer segmento?", a: "A solução pode ser adaptada a diferentes segmentos, mas cada implantação é configurada de acordo com o processo, as regras e os sistemas da empresa." },
              { q: "Como os dados são protegidos?", a: "O projeto deve utilizar controle de acesso, registro das interações e práticas adequadas de segurança e proteção de dados." },
            ].map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-brand transition"
                  >
                    <h3 className="text-base md:text-lg font-medium">{item.q}</h3>
                    {isOpen ? (
                      <Minus className="h-5 w-5 shrink-0 text-brand" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 text-foreground/60" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="pb-6 text-foreground/75 leading-relaxed">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          <div>
            <div className="uppercase tracking-[0.3em] text-[11px] text-brand font-semibold">
              Contato
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Vamos conversar sobre o seu atendimento.
            </h2>
            <p className="mt-6 text-foreground/75 font-light leading-relaxed">
              Preencha o formulário e um especialista entra em contato para agendar seu diagnóstico
              comercial.
            </p>
            <div className="mt-10 flex items-center gap-4 text-sm text-foreground/80">
              <Instagram className="h-4 w-4 text-brand" />
              <a href="https://instagram.com/atendevende" target="_blank" rel="noreferrer" className="hover:text-brand">
                @atendevende
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Recebemos seu contato! Retornamos em breve.");
            }}
            className="space-y-5"
            noValidate={false}
          >
            {[
              { name: "nome", label: "Nome", type: "text", auto: "name" },
              { name: "email", label: "E-mail", type: "email", auto: "email" },
              { name: "empresa", label: "Empresa", type: "text", auto: "organization" },
              { name: "whats", label: "WhatsApp", type: "tel", auto: "tel" },
            ].map((f) => (
              <div key={f.name}>
                <label htmlFor={f.name} className="block text-xs uppercase tracking-[0.2em] font-semibold text-foreground/70 mb-2">
                  {f.label}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  required
                  type={f.type}
                  autoComplete={f.auto}
                  className="w-full bg-transparent border-0 border-b border-border py-3 text-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-brand transition"
                />
              </div>
            ))}
            <div>
              <label htmlFor="mensagem" className="block text-xs uppercase tracking-[0.2em] font-semibold text-foreground/70 mb-2">
                Como podemos ajudar?
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={3}
                className="w-full bg-transparent border-0 border-b border-border py-3 text-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-brand transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 bg-gradient-brand text-primary-foreground text-sm font-semibold px-7 py-4 rounded-full shadow-glow hover:opacity-95 transition"
            >
              Solicitar diagnóstico <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="Atende&Vende" className="h-10 w-10 object-contain bg-background/95 rounded-full p-1" />
              <span className="text-lg font-semibold">
                Atende<span className="text-brand-2">&</span>Vende
              </span>
            </div>
            <p className="mt-5 text-sm text-background/70 max-w-sm leading-relaxed">
              Operação comercial automatizada e acompanhada, do primeiro contato ao resultado.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com/atendevende"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Atende&Vende"
                className="h-10 w-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-brand text-primary-foreground text-xs uppercase tracking-[0.18em] font-semibold px-5 py-3 rounded-full hover:opacity-95 transition"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {[
            { title: "Empresa", items: [
              { l: "Sobre", h: "#inicio" },
              { l: "Como funciona", h: "#como-funciona" },
              { l: "Contato", h: "#contato" },
            ]},
            { title: "Soluções", items: [
              { l: "Atendimento", h: "#solucoes" },
              { l: "Vendas", h: "#solucoes" },
              { l: "Agendamentos", h: "#solucoes" },
              { l: "Automação de processos", h: "#solucoes" },
            ]},
            { title: "Segmentos", items: [
              { l: "Clínicas", h: "#segmentos" },
              { l: "Comércio", h: "#segmentos" },
              { l: "Distribuidores", h: "#segmentos" },
              { l: "Serviços", h: "#segmentos" },
            ]},
            { title: "Legal", items: [
              { l: "Política de Privacidade", h: "#" },
              { l: "Termos de Uso", h: "#" },
            ]},
          ].map((col) => (
            <div key={col.title}>
              <div className="text-xs uppercase tracking-[0.24em] font-semibold text-brand-2">
                {col.title}
              </div>
              <ul className="mt-5 space-y-3">
                {col.items.map((i) => (
                  <li key={i.l}>
                    <a href={i.h} className="text-sm text-background/80 hover:text-background transition">
                      {i.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-background/60">© 2026 Atende&Vende. Todos os direitos reservados.</p>
            <p className="text-xs uppercase tracking-[0.22em] text-background/60">
              Atendimento, agendamentos, vendas e automação
            </p>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}

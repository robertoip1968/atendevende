import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, Zap, TrendingUp, Bot, Clock, ShieldCheck, Workflow, Instagram, Check, ArrowRight } from "lucide-react";
import logo from "@/assets/atende-vende-logo.asset.json";
import atendimentoImg from "@/assets/atendimento.jpg";
import vendasImg from "@/assets/vendas.jpg";
import automacaoImg from "@/assets/automacao.jpg";
import { ChatWidget } from "@/components/ChatWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atende&Vende — Automação de Atendimento e Vendas com IA" },
      { name: "description", content: "Automatize seu fluxo de atendimento e vendas com IA. Integre WhatsApp, Instagram e mais em uma única plataforma. Aumente conversões e reduza custos." },
      { property: "og:title", content: "Atende&Vende — Automação de Atendimento e Vendas" },
      { property: "og:description", content: "Automatize atendimento e vendas com IA. WhatsApp, Instagram e mais em uma plataforma." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logo.url} alt="Atende&Vende" className="h-10 w-10 object-contain" />
            <span className="font-bold text-lg tracking-tight">
              Atende<span className="text-gradient-brand">&</span>Vende
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#recursos" className="hover:text-foreground transition">Recursos</a>
            <a href="#areas" className="hover:text-foreground transition">Áreas de atuação</a>
            <a href="#planos" className="hover:text-foreground transition">Planos</a>
            <a href="#contato" className="hover:text-foreground transition">Contato</a>
          </nav>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-gradient-brand text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-card hover:shadow-glow transition"
          >
            Começar grátis <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-5 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-3 py-1 text-xs font-medium text-muted-foreground shadow-card">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" /> Powered by IA
            </span>
            <h1 className="mt-5 text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Automatize seu <span className="text-gradient-brand">atendimento</span> e venda mais, 24/7.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              O Atende&Vende integra WhatsApp, Instagram e webchat em uma única plataforma com IA que qualifica leads, responde clientes e dispara vendas automaticamente.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contato" className="bg-gradient-brand text-primary-foreground px-6 py-3 rounded-full font-medium shadow-glow hover:opacity-95 transition inline-flex items-center gap-2">
                Testar grátis por 7 dias <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#recursos" className="border border-border bg-card px-6 py-3 rounded-full font-medium hover:bg-muted transition">
                Ver como funciona
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Sem cartão</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Setup em 5 min</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Suporte humano</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-3xl" aria-hidden />
            <div className="relative rounded-2xl overflow-hidden shadow-glow border border-border bg-card">
              <video
                className="w-full h-auto aspect-video object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={automacaoImg}
              >
                <source
                  src="https://cdn.pixabay.com/video/2023/10/06/183376-872566925_large.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://videos.pexels.com/video-files/8348606/8348606-hd_1920_1080_25fps.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-card flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-brand flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">IA respondendo</div>
                <div className="text-muted-foreground text-xs">247 conversas ativas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos strip / stats */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "3x", l: "Mais conversão" },
            { n: "24/7", l: "Atendimento" },
            { n: "-60%", l: "Custo operacional" },
            { n: "5min", l: "Para configurar" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl lg:text-4xl font-bold text-gradient-brand">{s.n}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Recursos</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight">Tudo que sua operação precisa em um só lugar</h2>
          <p className="mt-4 text-muted-foreground">Uma plataforma completa para atender, qualificar e converter — sem esforço manual.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Bot, title: "IA que conversa como humano", desc: "Respostas naturais, contexto de cliente e transferência inteligente para o time." },
            { icon: Workflow, title: "Fluxos visuais no drag & drop", desc: "Monte automações complexas em minutos, sem programação." },
            { icon: MessageSquare, title: "Multi-canal unificado", desc: "WhatsApp Oficial, Instagram, Messenger e webchat em uma caixa de entrada." },
            { icon: TrendingUp, title: "Funil de vendas automático", desc: "Leads qualificados vão direto para o vendedor certo, no momento certo." },
            { icon: Clock, title: "Atendimento 24/7", desc: "Nunca perca um cliente por horário. A IA cuida enquanto seu time descansa." },
            { icon: ShieldCheck, title: "Seguro e escalável", desc: "Infraestrutura em nuvem com criptografia e LGPD nativos." },
          ].map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl border border-border bg-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center shadow-card">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Áreas de atuação */}
      <section id="areas" className="bg-gradient-soft py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Áreas de atuação</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight">Feito para quem vive de atender e vender</h2>
            <p className="mt-4 text-muted-foreground">Do e-commerce à clínica, empresas de todos os portes escalam com o Atende&Vende.</p>
          </div>

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {[
              { img: atendimentoImg, tag: "Atendimento", title: "SAC & Suporte", desc: "Reduza tempo de resposta e resolva tickets automaticamente com IA que aprende com seu time." },
              { img: vendasImg, tag: "Vendas", title: "Comercial & E-commerce", desc: "Qualifique leads em segundos, envie propostas e feche vendas dentro do próprio WhatsApp." },
              { img: automacaoImg, tag: "Tecnologia", title: "Automação de Processos", desc: "Integre CRM, ERP e planilhas para criar fluxos que rodam sozinhos, 24 horas por dia." },
            ].map((a) => (
              <article key={a.title} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-glow transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={a.img}
                    alt={a.title}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{a.tag}</span>
                  <h3 className="mt-2 text-xl font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Como funciona</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight">Do primeiro contato à venda, em 3 passos</h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {[
            { n: "01", t: "Conecte seus canais", d: "Ligue WhatsApp, Instagram e site em minutos com integrações nativas." },
            { n: "02", t: "Configure o fluxo", d: "Escolha um template pronto ou desenhe o seu no editor visual." },
            { n: "03", t: "Deixe a IA vender", d: "Acompanhe métricas em tempo real enquanto a automação trabalha por você." },
          ].map((s) => (
            <div key={s.n} className="relative p-8 rounded-2xl border border-border bg-card">
              <div className="text-5xl font-bold text-gradient-brand opacity-90">{s.n}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="bg-gradient-soft py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Planos</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight">Preço justo, sem surpresa</h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Start", price: "197", desc: "Ideal para começar.", feats: ["1 canal", "1.000 conversas/mês", "Fluxos básicos", "Suporte por e-mail"], highlight: false },
              { name: "Pro", price: "497", desc: "Para times em crescimento.", feats: ["Canais ilimitados", "10.000 conversas/mês", "IA avançada", "Integrações CRM", "Suporte prioritário"], highlight: true },
              { name: "Scale", price: "Custom", desc: "Para grandes operações.", feats: ["Volume ilimitado", "IA treinada sob medida", "SLA dedicado", "Gerente de conta"], highlight: false },
            ].map((p) => (
              <div
                key={p.name}
                className={`relative p-8 rounded-2xl border bg-card transition-all duration-300 ${
                  p.highlight ? "border-primary shadow-glow scale-[1.02]" : "border-border shadow-card"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-brand text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Mais popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                <div className="mt-5">
                  {p.price === "Custom" ? (
                    <div className="text-4xl font-bold">Sob consulta</div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-muted-foreground">R$</span>
                      <span className="text-4xl font-bold">{p.price}</span>
                      <span className="text-sm text-muted-foreground">/mês</span>
                    </div>
                  )}
                </div>
                <ul className="mt-6 space-y-2.5">
                  {p.feats.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className={`mt-8 block text-center px-4 py-3 rounded-full font-medium transition ${
                    p.highlight
                      ? "bg-gradient-brand text-primary-foreground shadow-card hover:opacity-95"
                      : "border border-border bg-background hover:bg-muted"
                  }`}
                >
                  {p.price === "Custom" ? "Falar com vendas" : "Começar agora"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contato */}
      <section id="contato" className="max-w-5xl mx-auto px-5 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 lg:p-16 text-primary-foreground shadow-glow">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: `url(${automacaoImg})`, backgroundSize: "cover" }} aria-hidden />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Pronto para vender no automático?</h2>
              <p className="mt-4 opacity-90">Fale com um especialista e descubra como o Atende&Vende pode transformar seu atendimento em uma máquina de vendas.</p>
              <div className="mt-6 flex items-center gap-3 text-sm opacity-90">
                <Instagram className="h-4 w-4" /> @atendevende
                <span className="opacity-50">·</span>
                <Zap className="h-4 w-4" /> Resposta em minutos
              </div>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Recebemos seu contato! Retornamos em breve. 💙"); }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 space-y-3"
            >
              <input required placeholder="Seu nome" className="w-full bg-white/95 text-foreground rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white" />
              <input required type="email" placeholder="Seu e-mail" className="w-full bg-white/95 text-foreground rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white" />
              <input required placeholder="WhatsApp" className="w-full bg-white/95 text-foreground rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white" />
              <button className="w-full bg-foreground text-background rounded-lg px-4 py-3 font-medium hover:opacity-90 transition inline-flex items-center justify-center gap-2">
                Quero uma demo <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src={logo.url} alt="Atende&Vende" className="h-8 w-8 object-contain" />
            <span className="font-semibold">Atende<span className="text-gradient-brand">&</span>Vende</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Atende&Vende. Todos os direitos reservados.</p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}

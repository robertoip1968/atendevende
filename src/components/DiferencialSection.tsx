import { useEffect, useRef, useState } from "react";
import { MessageSquare, CornerDownRight, CircleSlash, Brain, Database, Cog, Repeat, CheckCircle2, ChevronsDown } from "lucide-react";

const basicSteps = [
  { label: "Mensagem", Icon: MessageSquare },
  { label: "Resposta", Icon: CornerDownRight },
  { label: "Fim da conversa", Icon: CircleSlash },
];

const proSteps = [
  { label: "Mensagem", Icon: MessageSquare },
  { label: "Entende", Icon: Brain },
  { label: "Consulta", Icon: Database },
  { label: "Executa", Icon: Cog },
  { label: "Acompanha", Icon: Repeat },
  { label: "Resultado", Icon: CheckCircle2 },
];

export function DiferencialSection({
  container,
  sectionPad,
}: {
  container: string;
  sectionPad: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [revealed]);

  return (
    <section
      id="sobre"
      ref={ref}
      className={`${sectionPad} pb-36 md:pb-40 lg:pb-28 relative overflow-hidden bg-[oklch(0.20_0.05_260)] text-white ${revealed ? "av-reveal" : ""}`}
    >
      {/* grid técnico + brilhos */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-24 right-0 h-[420px] w-[420px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, oklch(0.70 0.16 210), transparent 65%)" }}
      />

      <div className={`${container} relative`}>
        <div className="max-w-3xl">
          <div className="uppercase tracking-[0.3em] text-[11px] text-white/55">Mais que conversa</div>
          <div className="mt-5 h-px w-12 bg-white/25" />
          <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
            Não é apenas um chatbot
          </h2>
          <p className="mt-5 text-lg md:text-xl font-medium text-white">
            Um chatbot responde. O Atende&amp;Vende faz acontecer.
          </p>
          <p className="mt-3 text-base md:text-lg font-light text-white/65 leading-relaxed">
            A conversa é apenas o começo. A solução consulta, executa, registra e acompanha.
          </p>
        </div>

        {/* Comparação assimétrica */}
        <div className="mt-12 lg:mt-16 grid gap-8 lg:grid-cols-[35fr_auto_65fr] lg:gap-6 lg:items-stretch">
          {/* Bloco 1 — chatbot comum */}
          <div className="rounded-xl border border-white/12 bg-white/[0.035] p-6 md:p-7">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">Chatbot comum</span>
            <div className="mt-6 flex flex-col gap-3">
              {basicSteps.map((s, i) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div
                    className="av-step flex items-center gap-3 rounded-md border border-white/12 bg-white/[0.05] px-3 py-2 w-full"
                    style={{ ["--d" as string]: `${i * 220}ms` }}
                  >
                    <s.Icon className="h-4 w-4 text-white/55 shrink-0" />
                    <span className="text-sm text-white/75">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/50">Entrega uma resposta.</p>
          </div>

          {/* Elemento central de transição */}
          <div className="flex lg:flex-col items-center justify-center gap-3 lg:px-2">
            <div className="h-px w-16 lg:h-16 lg:w-px bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            <span className="text-[11px] tracking-[0.25em] text-white/55 font-medium">VS</span>
            <div className="lg:hidden h-px w-16 bg-gradient-to-r from-white/30 to-transparent" />
            <ChevronsDown className="hidden lg:block h-4 w-4 text-[oklch(0.78_0.14_205)]" />
            <div className="hidden lg:block h-16 w-px bg-gradient-to-b from-white/30 to-transparent" />
          </div>

          {/* Bloco 2 — Atende&Vende */}
          <div
            className="av-result relative rounded-xl border border-[oklch(0.70_0.14_210)]/45 p-6 md:p-9"
            style={{
              ["--d" as string]: "300ms",
              background:
                "linear-gradient(135deg, oklch(0.26 0.07 258), oklch(0.30 0.09 235))",
              boxShadow: "0 0 0 1px oklch(0.70 0.14 210 / 0.15), 0 30px 70px -35px oklch(0.70 0.14 210 / 0.55)",
            }}
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-[oklch(0.82_0.13_205)] font-medium">
              Atende&amp;Vende
            </span>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 xl:flex xl:flex-nowrap xl:items-center xl:gap-2">
              {proSteps.map((s, i) => (
                <div key={s.label} className="flex xl:contents items-center gap-3">

                  <div
                    className="av-step flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.07] px-3 py-2 backdrop-blur-[1px] whitespace-nowrap"
                    style={{ ["--d" as string]: `${500 + i * 200}ms` }}
                  >
                    <s.Icon className="h-4 w-4 text-[oklch(0.82_0.13_205)] shrink-0" />
                    <span className="text-sm font-medium text-white">{s.label}</span>
                  </div>
                  {i < proSteps.length - 1 && (
                    <span
                      className="av-line hidden xl:block h-px flex-1 min-w-3 bg-[oklch(0.72_0.14_205)]/60"
                      style={{ ["--d" as string]: `${600 + i * 200}ms` }}
                    />
                  )}

                </div>
              ))}
            </div>

            <div
              className="av-result mt-7 rounded-lg border border-[oklch(0.75_0.14_205)]/50 bg-[oklch(0.72_0.14_205)]/12 px-5 py-4"
              style={{ ["--d" as string]: "1700ms" }}
            >
              <div className="text-[11px] uppercase tracking-[0.2em] text-[oklch(0.82_0.13_205)]">Resultado</div>
              <p className="mt-1 text-lg md:text-xl font-medium text-white leading-snug">
                Agendamento, orçamento, pedido ou venda
              </p>
            </div>

            <p className="mt-6 text-sm text-white/70">Conduz o cliente até a próxima ação.</p>
          </div>
        </div>

        {/* Frase final */}
        <div className="mt-12 lg:mt-16 max-w-4xl border-l-2 border-[oklch(0.72_0.14_205)] pl-6 pr-14 md:pr-16 lg:pr-0">
          <p className="text-xl md:text-2xl font-light tracking-tight leading-snug text-white">
            A diferença não está na mensagem automática.{" "}
            <span className="font-medium">Está no processo que acontece depois dela.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

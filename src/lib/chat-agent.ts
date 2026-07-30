export type ChatAgentContext = {
  /** Onde no site o agente foi aberto, ex.: "seção impacto" */
  origem?: string;
  /** Intenção declarada, ex.: "diagnóstico de oportunidades perdidas" */
  interesse?: string;
  /** Segmento provável, ex.: "saúde" */
  segmento?: string;
};

export const CHAT_AGENT_OPEN_EVENT = "atendevende:open-chat";

/**
 * Abre o agente do site programaticamente, registrando o contexto de origem.
 * Reutilizável em qualquer seção da página.
 */
export function openChatAgent(context: ChatAgentContext = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<ChatAgentContext>(CHAT_AGENT_OPEN_EVENT, { detail: context }),
  );
}

# Registro de execuções

## 16/10/2026 (sexta — funcionalidades)
- Auditoria do app → `docs/MAPA_DO_APP.md` (13 segmentos, 39 catálogos, lacunas observadas).
- Novo campo **Comparação com exame anterior** (data, modalidade, frases rápidas, texto livre); aparece na folha, entre o relatório e a impressão, só se preenchido.
- Correção de usabilidade: nome do paciente, data e solicitante agora persistem ao trocar de segmento/modelo (antes zeravam). Continua só em memória.
- Testes (Chromium headless/Playwright): laudo normal e alterado nos 13 segmentos, troca de segmento, comparação preenchida/vazia, saída de impressão (PDF) — 0 erros de console.
- Fontes: nenhum conteúdo clínico novo (apenas funcionalidade). Frases rápidas de comparação são redação genérica; ver PENDENTE_REVISAO.

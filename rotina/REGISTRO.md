# Registro de execuções

## 16/10/2026 (sexta — funcionalidades)
- Auditoria do app → `docs/MAPA_DO_APP.md` (13 segmentos, 39 catálogos, lacunas observadas).
- Novo campo **Comparação com exame anterior** (data, modalidade, frases rápidas, texto livre); aparece na folha, entre o relatório e a impressão, só se preenchido.
- Correção de usabilidade: nome do paciente, data e solicitante agora persistem ao trocar de segmento/modelo (antes zeravam). Continua só em memória.
- Testes (Chromium headless/Playwright): laudo normal e alterado nos 13 segmentos, troca de segmento, comparação preenchida/vazia, saída de impressão (PDF) — 0 erros de console.
- Fontes: nenhum conteúdo clínico novo (apenas funcionalidade). Frases rápidas de comparação são redação genérica; ver PENDENTE_REVISAO.

## 17/10/2026 (sábado — revisão)
- Revisão de ortografia/terminologia nos ~1.780 textos do app: `hipoecóica`→`hipoecoica` (Neuroma de Morton), `estilóide`→`estiloide` (punho), `ruptura`→`rotura` (manguito normal; padrão do app), `bicipito-radial`→`bicipitorradial` (cotovelo).
- Auditoria dos valores de referência embutidos (6 limiares) com PubMed → `docs/REFERENCIAS.md`. WFR 1,4 e fáscia plantar 4 mm confirmados; nervo mediano/ulnar são aproximados (variam por estudo); limiar de 2 mm do quadril sem fonte em adultos → marcado **[verificar]** no app e listado em PENDENTE_REVISAO.
- Testes (Chromium headless/Playwright): 16 combinações segmento/modelo, laudo normal e alterado (1º achado de cada item, com medidas) — 0 erros de console; `[verificar]` aparece só no quadril com medidas.
- Fontes: PMIDs 18387336, 8816554, 38965008, 22806381, 41342790, 38902998, 42117691, 10739295, 9646791.

## 18/10/2026 (domingo — decisões do Dr. Ian)
- Quadril: removido o limiar "assimetria superior a 2 mm" (e o [verificar]). Mantidos: mediano 10 mm², fáscia plantar 4 mm, razão punho/antebraço 1,4.
- Joelho: novo item 9 "Tendão do bíceps femoral" (frase normal + achados "lesão na inserção fibular (avulsão)" e "bursite colateral lateral–bíceps femoral"); impressões e dx correspondentes. Fontes: PMIDs 37663094, 35925385, 26064740, 18394503 (ver REFERENCIAS). Tendinopatia/rotura parcial/bursite calcária ficaram em PENDENTE_REVISAO por falta de fonte ultrassonográfica.
- Removida a cópia antiga duplicada em `laudos-usg-musculoesqueletico/`.
- Testes (Chromium headless): 16 combinações segmento/modelo, normal e alterado, e joelho com ambos os achados novos e medidas — 0 erros de console.

## 18/10/2026 (pedido do Dr. Ian — moldes de cabeçalho)
- Novo seletor **Cabeçalho** (registro `TIMBRADOS` no index.html): "Particular" (molde anterior, inalterado) e "CREB Tatuapé" (novo; sem item Atendimento; rodapé com endereço/telefone do Tatuapé; sem marca d'água). Campo "Nascimento" só no molde CREB. Preferência do molde guardada em localStorage (apenas o id). Guia de uso: `docs/MODELOS_DE_CABECALHO.md`.
- Logo do CREB extraído do papel timbrado fornecido (apenas o logotipo; nenhum dado de paciente foi copiado).
- Testes (Chromium headless): 16 combinações segmento/modelo nos dois moldes, normal e alterado, e PDF de impressão — 0 erros de console.

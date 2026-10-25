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
- 18/10/2026 (ajuste): molde CREB Tatuapé — removida a data de nascimento (no lugar entrou a Data de emissão, que saiu do topo); endereço/telefone centralizados no rodapé; legenda do logo agora com "Botafogo" (nome da rede).

## 18/10/2026 (pedido do Dr. Ian — LaudoFlow e ajustes de impressão)
- App renomeado para **LaudoFlow** (título, barra, README); logo (wordmark) na barra e ícone como favicon; paleta e estilo flat aplicados à interface (sem sombras) — ver `docs/IDENTIDADE_VISUAL.md`.
- **Impressão**: novo seletor de recomendações (correlacionar com dados clínicos / complementar com tomografia / correlacionar com ressonância / complementar com radiografia), redação fornecida pelo Dr. Ian; saem ao final da Impressão. "Tudo normal" limpa a seleção.
- **Comparação com exame anterior** passou a ficar depois da Impressão (painel e folha).
- **Cabeçalho** fica junto dos botões Tudo normal e Imprimir/PDF na barra superior.
- Testes (Chromium headless): 16 combinações segmento/modelo nos dois moldes, normal e alterado, recomendações marcadas, PDF — 0 erros de console.

## 19/10/2026 (segunda — conteúdo clínico: ombro e cotovelo)
- Ombro: novo achado **Cisto paralabral posterior** (com medida opcional e recomendação de RM; dx incluído).
- Cotovelo: novos achados **Rotura parcial do tríceps distal**, **Rotura completa do tríceps distal** (retração opcional) e **Tríceps em ressalto (dinâmico)**, com dx.
- Fontes: PMIDs 39439307, 41552105, 28660143, 39612282 (aplicadas); 30987955 (lida, não aplicada). Ver REFERENCIAS e PENDENTE_REVISAO.
- Testes (Chromium headless): 13 segmentos em laudo normal; Ombro e Cotovelo com todos os achados marcados e medidas ligadas — 0 erros de console; novos achados aparecem no relatório e na impressão.

## 19/10/2026 (segunda — 2º ciclo, conteúdo clínico: cotovelo)
- Cotovelo: novos achados **Lesão do ligamento colateral lateral** e **Frouxidão ulnoumeral ao estresse posterolateral (dinâmico)**, com dx; medidas opcionais, sem limiar numérico.
- Fontes: PMIDs 27317917, 42007425, 41067537, 36124539 (ver REFERENCIAS e PENDENTE_REVISAO). PubMed limitou o acesso (HTTP 429) na busca de um PMID adicional.
- Testes (Chromium headless): cotovelo com os dois novos achados marcados e medidas preenchidas (relatório e impressão); Ombro em laudo normal — 0 erros de console.

## 20/10/2026 (terça — conteúdo clínico: punho/mão, quadril/coxa)
- Punho: novos achados **Neuropatia do ramo superficial do radial (Wartenberg)** e **Neuroma do ramo superficial do radial** (Item 5, compartimentos extensores), com dx; medida opcional sem limiar numérico.
- Quadril: novos achados **Rotura do reto femoral proximal** e **Tendinite calcária do reto femoral** (face anterior), com dx e medidas opcionais.
- Fontes: PMIDs 37296780 (texto completo lido), 28857221, 26956398 (resumos); 7573663 (contexto anatômico, não aplicado). Ver REFERENCIAS e PENDENTE_REVISAO.
- Testes (Chromium headless): Punho (modelos A e B) e Quadril em laudo normal e alterado, com os novos achados marcados e medidas ligadas (relatório e impressão) — 0 erros de console.

## 23/10/2026 (sexta — funcionalidades)
- **Busca rápida** no console: filtra frases normais e achados do banco do segmento atual (sem diferenciar acentos/maiúsculas), destaca o trecho, mostra contador de resultados (leitor de tela via aria-live). Atalhos: `/` ou Ctrl/Cmd+K focam a busca; Esc limpa. A busca não altera o laudo; itens ocultos pelo filtro continuam valendo.
- **Celular/tablet**: corrigido estouro horizontal da página em telas estreitas (coluna do grid com `minmax(0,1fr)`); barra superior em grade de 2 colunas e não fixa no celular; linhas do console reorganizadas; alvos de toque maiores (`pointer:coarse`); folha A4 deixa de ser fixa em telas <1180 px.
- **Acessibilidade**: rótulos (`aria-label`) nos checkboxes de achados e nas frases editáveis; campo de busca com rótulo para leitor de tela.
- Testes (Chromium headless/Playwright, 1400 px e 390 px): 13 segmentos/modelos em laudo normal e alterado, busca com e sem resultado, acentos, atalho e Esc — 0 erros de console; sem rolagem horizontal em 390 px.
- Fontes: nenhum conteúdo clínico novo (apenas funcionalidade).

## 24/10/2026 (sábado — revisão)
- Fila de push: patch 001 (23/10, busca/celular) aplicado sobre a main antes do trabalho de hoje.
- Revisão de terminologia/ortografia nos 1.820 textos: nenhuma divergência nova (padrão "rotura", "hipoecoico", "bicipitorradial", hifenização de "ântero-posterior", "pré-patelar", "intra/extra-articular" consistentes). Sem alteração de conteúdo clínico.
- Novo `rotina/verificar_integridade.js`: confere marcadores `{{...}}` x catálogos (39, todos usados), colchetes/chaves balanceados, achados sem texto, nomes duplicados e grafias antigas. Resultado: OK.
- PENDENTE_REVISAO revisado: os 8 achados sem `dx` são complementos/sinais (Hiperemia intraneural, Sinal do entalhe, Relação punho/antebraço, Estudo venoso normal, Mãos sem alterações) — coerente com serem complementares; aguarda confirmação do Dr. Ian.
- Testes (Chromium headless): 13 segmentos, laudo normal e alterado (1º achado), busca digitada/limpa — 0 erros de console.
- Fontes: nenhum conteúdo clínico novo.

## 25/10/2026 (domingo — busca de evidências)
- Fila de push: patches 001 (23/10) e 002 (24/10) aplicados sobre a main (c6c4b31) com `git am`; integridade OK.
- PubMed: busca de CSA do ramo sensitivo radial superficial (texto completo de Bae 2021, PMID 33950986, lido), LCL lateral do cotovelo (US), bíceps femoral distal e avulsão da EIAI/reto femoral. Só a primeira rendeu valor de referência utilizável; as demais não têm fonte ultrassonográfica adequada.
- Nenhuma alteração no app (domingo = proposta; sem aplicar sem decisão). Registrado em REFERENCIAS e PENDENTE_REVISAO; backlog atualizado.
- Testes: `verificar_integridade.js` OK; Chromium headless — 13 segmentos, laudo normal e alterado, 0 erros de console.

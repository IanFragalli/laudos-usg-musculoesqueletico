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

## 26/10/2026 (segunda — conteúdo clínico: ombro e cotovelo)
- Fila de push: patches 001 (23/10), 002 (24/10) e 003 (25/10) aplicados sobre a main (c6c4b31) com `git am`; integridade OK (13 segmentos, 39 catálogos).
- Busca (Consensus/PubMed) sobre roturas do subescapular à US: fontes com resumos lidos, mas sem texto completo (PMC bloqueado) e sem PMIDs confirmados → nenhum conteúdo clínico inserido no app; proposta em PENDENTE_REVISAO e referências em REFERENCIAS (marcadas "a confirmar").
- Nenhuma alteração em `index.html`. Testes: `verificar_integridade.js` OK; abertura em Chromium headless sem erros de console.

## 27/10/2026 (terça — conteúdo clínico: punho/mão, quadril/coxa)
- Fila de push: os 4 patches pendentes (001–004) já estavam contidos na main (e81c624, push de 26/10); nada a reaplicar. Fila do Projeto zerada.
- Quadril: novo achado **Aumento do músculo piriforme** (face posterior), com dx e medida opcional, sem limiar numérico. Fonte: Zhang 2019, Muscle Nerve, PMID 30663080 (texto completo lido).
- Punho (FCU no pisiforme) e quadril (impacto isquiofemoral): fontes encontradas, mas sem PMID/texto completo → não inseridos; propostas em PENDENTE_REVISAO e referências em REFERENCIAS ("a confirmar").
- Testes: `verificar_integridade.js` OK (13 segmentos, 39 catálogos); Chromium headless — Quadril com o novo achado marcado (aparece no relatório e na Impressão), varredura dos 13 segmentos — 0 erros de console.

## 28/10/2026 (quarta — conteúdo clínico: joelho, perna/panturrilha, tornozelo/pé)
- Fila de push: o patch 001 (piriforme, 27/10) já estava contido na main (commits 2f7b627/e28e83e); nada a reaplicar. Fila do Projeto zerada.
- Busca: ligamento popliteofibular/canto posterolateral (Pękala 2022, PMID 34146118) e tenossinovite do FLH (Lee 2013; Mikkelsen 2023). Nenhuma fonte com critérios patológicos confirmados (PMIDs ausentes / sem cortes validados) → nenhum conteúdo clínico inserido no app; propostas em PENDENTE_REVISAO e referências em REFERENCIAS.
- Nenhuma alteração em `index.html`. Testes: `verificar_integridade.js` OK; Chromium headless sem erros de console.

## 29/10/2026 (quinta — rotinas de exame)
- Fila de push: patch 001 (28/10, só documentação) reaplicado sobre a main (e28e83e) com `git am`.
- Novo **Lembrete técnico do exame** (painel recolhível no console, não vai ao laudo nem à impressão): sequência fixa de varredura, anisotropia, padronização da angulação ao medir/comparar, manobras dinâmicas. Fontes: Martinoli 2010 (ESSR, DOI 10.1007/s13244-010-0032-9, texto não lido), Jacobson 2011 (DOI 10.1148/radiol.11101082), Pirri 2025, Ricci 2021 (resumos).
- Checklist por segmento NÃO feito: sem texto completo de protocolo → PENDENTE_REVISAO.
- Testes: `verificar_integridade.js` OK; Chromium headless 1400 e 390 px, 13 segmentos com 1º item alterado, painel aberto — 0 erros de console, sem rolagem horizontal.

## 30/10/2026 (sexta — funcionalidades)
- Fila de push: patches 001 (28/10) e 002 (29/10) reaplicados sobre a main (e28e83e) com `git am`; integridade OK (13 segmentos, 39 catálogos).
- Novo botão **Copiar texto** (barra superior): copia o laudo em texto simples (título, identificação, relatório, observação, comparação e impressão) para colar em prontuário/RIS; usa a área de transferência local do navegador (com alternativa `execCommand`) — nenhum dado é enviado a servidores. Aviso por leitor de tela (`aria-live`).
- Novo botão **Novo paciente**: limpa paciente, datas e solicitante sem apagar o laudo em edição (boa prática de privacidade entre exames).
- Testes (Chromium headless/Playwright, 1400 e 390 px): 13 segmentos em laudo normal e alterado (1º achado marcado + comparação), cópia verificada lendo a área de transferência, Novo paciente — 0 erros de console, sem rolagem horizontal.
- Fontes: nenhum conteúdo clínico novo (apenas funcionalidade).

## 30/10/2026 (sexta — 2º ciclo, funcionalidades)
- Fila de push: os patches 001–003 (28–30/10) já estavam contidos na main (push de 30/10, 7265fab); nada a reaplicar. Fila do Projeto zerada.
- Novo botão **Baixar Word** (barra superior): baixa o laudo (cabeçalho do serviço, identificação, relatório, impressão, comparação, assinatura) como `.doc` em HTML aceito pelo Word, gerado no navegador (Blob local); sem a marca d'água; nome do arquivo derivado do paciente (sem acentos). Nenhum dado sai do computador. Aparência no Word ainda a validar pelo Dr. Ian.
- Testes (Chromium headless/Playwright): 13 segmentos × 2 cabeçalhos × laudo normal/alterado = 52 downloads, conteúdo conferido (paciente, título, sem marca d'água) — 0 erros de console; `verificar_integridade.js` OK.
- Fontes: nenhum conteúdo clínico novo (apenas funcionalidade).

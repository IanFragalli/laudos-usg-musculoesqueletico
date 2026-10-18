# Mapa do app — `index.html`

Auditoria feita em 16/10/2026 (leitura do código e extração dos dados embutidos).

## Arquitetura
- Arquivo único, offline, sem dependências externas. Todo o conteúdo clínico está no objeto JavaScript `D` (linha ~288), com três chaves: `segmentos`, `imgs` (timbrado/assinatura em base64) e `catalogos`.
- Estado em memória (`store`, `edits`, `ident`); nada de paciente é gravado em disco nem enviado a servidor (exceção: o id do molde de cabeçalho escolhido fica no localStorage). Fechar a aba apaga tudo.
- Fluxo: **modelo de relatório** (itens normais) → o usuário desliga "Normal" no item → escolhe **achados do banco** (com lacunas `.....`, medidas opcionais `[[...]]` e estruturas `{{catalogo}}`) → a **Impressão** é montada pelo campo `dx` de cada achado → folha A4 com timbrado → `window.print()`.

## Segmentos (13)
| Segmento | Região | Modelos | Itens do modelo | Grupos de achados | Achados | Com `dx` | Obs. |
|---|---|---|---|---|---|---|---|
| OMBRO | MEMBRO SUPERIOR | padrão | 6 | 9 | 32 | 32 | não |
| BRAÇO | MEMBRO SUPERIOR | padrão | 5 | 6 | 26 | 26 | não |
| COTOVELO | MEMBRO SUPERIOR | padrão | 6 | 8 | 24 | 23 | não |
| ANTEBRAÇO | MEMBRO SUPERIOR | padrão | 6 | 9 | 26 | 26 | não |
| PUNHO | MEMBRO SUPERIOR | MODELO A — RESUMIDO; MODELO B — DETALHADO (por compartimentos) | 6/10 | 10 | 38 | 34 | não |
| MÃO | MEMBRO SUPERIOR | MODELO A — RESUMIDO; MODELO B — DETALHADO (por compartimentos) | 6/5 | 9 | 30 | 30 | não |
| QUADRIL | MEMBRO INFERIOR | MODELO DETALHADO (por face) | 9 | 8 | 32 | 32 | não |
| COXA | MEMBRO INFERIOR | padrão | 6 | 8 | 26 | 25 | não |
| JOELHO | MEMBRO INFERIOR | padrão | 8 | 9 | 35 | 35 | não |
| PERNA | MEMBRO INFERIOR | padrão | 6 | 7 | 26 | 25 | não |
| PANTURRILHA | MEMBRO INFERIOR | padrão | 6 | 7 | 26 | 25 | não |
| TORNOZELO | MEMBRO INFERIOR | padrão | 7 | 8 | 35 | 35 | não |
| PÉ | MEMBRO INFERIOR | MODELO A — RESUMIDO; MODELO B — DETALHADO (por face) | 6/5 | 9 | 35 | 35 | sim |

## Estrutura de dados
- `segmento`: `key`, `titulo`, `regiao`, `fem` (concordância de gênero do lado), `modelos[]`, `grupos[]`, `mapa` (liga grupos às linhas do modelo quando há mais de um modelo), `obs` (rodapé opcional; hoje só o Pé).
- `modelo`: `tipo` = `itens` (lista numerada) ou `blocos` (letras a), b)… por compartimento/face).
- `grupo`: `titulo`, `itens` (linhas do modelo às quais se liga), `achados[]` com `nome`, `texto` e `dx`.
- Marcadores no texto: `.....` (lacuna a preencher), `[[trecho]]` (medida, só entra se "incluir medidas"), `{{catalogo}}` (estruturas selecionáveis; gera uma frase por combinação, até 8).

## Catálogos (39)
`manguito`, `musc_ombro`, `musc_braco`, `musc_antebraco`, `musc_coxa`, `musc_perna`, `tcomum`, `tend_antebraco`, `epicondilo`, `graus`, `doppler`, `ossos_antebraco`, `compartimentos`, `lado`, `ossos_carpo`, `dedos`, `polias`, `tend_dedos`, `artic_mao`, `gluteo`, `adutores`, `faceta`, `ecogen`, `contornos`, `vasc`, `conteudo`, `veias`, `face_tibia`, `tercos`, `menisco`, `fibular`, `tipo_rotura`, `espacos`, `mtf`, `metatarsais`, `face_rotura`, `bursa_ip`, `face_punho`, `tend_pe`

## Funcionalidades existentes
Seleção de segmento/modelo/lado; identificação (paciente, data, solicitante); "Tudo normal"; edição direta do texto normal e dos achados; achado livre; impressão automática ou manual + texto livre; pré-visualização A4 com zoom automático; impressão com timbrado repetido por página (`thead`/`tfoot`).

## Funcionalidades adicionadas pela rotina
- 16/10/2026: campo **Comparação com exame anterior** (data, modalidade, frases rápidas, texto livre; só aparece na folha se preenchido).
- 16/10/2026: identificação do paciente (nome, data, solicitante) agora vale para todos os segmentos da sessão (antes zerava ao trocar de segmento).

## Lacunas observadas (para o backlog)
- Sem busca de achados/frases; sem checklist de varredura; sem exportação Word; sem persistência (por desenho, privacidade).
- Cobertura de `dx`: alguns achados não têm `dx` (Cotovelo 23/24, Punho 34/38, Coxa, Perna e Panturrilha 25/26) — confirmar se é intencional (achados que não geram diagnóstico).
- Lateralidade: sem opção "bilateral".

- 18/10/2026: Joelho passa a ter 9 itens no modelo e 10 grupos de achados (novo item 9 — Tendão do bíceps femoral, 2 achados com `dx`). Quadril: removido o limiar de assimetria de 2 mm do derrame.
- 18/10/2026: seletor **Cabeçalho** (moldes Particular e CREB Tatuapé; campo Nascimento no molde CREB) — ver `docs/MODELOS_DE_CABECALHO.md`.

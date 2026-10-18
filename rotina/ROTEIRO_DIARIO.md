# Rotina diária de melhoria — LaudoFlow (USG MSK)

Objetivo: tornar o app referência digital em laudos e rotinas de ultrassom musculoesquelético.
Cada execução faz UM ciclo pequeno, seguro e documentado.

## Regras fixas
1. Ler `rotina/REGISTRO.md` (o que já foi feito) e `rotina/BACKLOG.md` (próximos itens) antes de começar.
2. Fazer no máximo 2–3 melhorias por dia, escolhendo do backlog por prioridade. Sem reescrever o app inteiro.
3. O app é um arquivo único (`index.html`), offline. Não adicionar dependências externas nem enviar dados de pacientes a nenhum servidor.
4. Conteúdo clínico: só inserir o que tiver fonte verificável (PubMed, consenso ou diretriz: ESSR, EFSUMB, SBR/CBR, AIUM, ACR). Registrar a referência em `docs/REFERENCIAS.md` (autor, ano, periódico, PMID/DOI). Sem fonte, não entra no app: vai para `docs/PENDENTE_REVISAO.md`.
5. Medidas e critérios (espessuras, limiares, classificações) devem ser conferidos na fonte. Em dúvida, marcar "[verificar]" e listar em PENDENTE_REVISAO.
6. Testar: abrir o HTML num navegador headless, gerar um laudo normal e um alterado por segmento tocado, e conferir ausência de erros no console. Não commitar se quebrar.
7. Commit pequeno por melhoria, mensagem em português. Registrar tudo em `rotina/REGISTRO.md` com data, o que mudou e fonte.
8. Enviar ao Ian um resumo curto: o que mudou, fontes, pendências de revisão.

## Rodízio de foco (por dia da semana)
- Seg: conteúdo clínico — ombro e cotovelo (frases, achados, classificações)
- Ter: conteúdo clínico — punho/mão, quadril/coxa
- Qua: conteúdo clínico — joelho, perna/panturrilha, tornozelo/pé
- Qui: rotinas de exame — protocolo de varredura, checklist, cortes padrão, armadilhas (anisotropia etc.), técnica dinâmica
- Sex: funcionalidades — busca, atalhos, exportação PDF/Word, personalização, acessibilidade, uso em celular
- Sáb: revisão — consistência de terminologia, ortografia, lacunas; revisar PENDENTE_REVISAO
- Dom: busca de evidências novas no PubMed e proposta de atualização (não aplicar sem fonte lida)

## Critérios de qualidade do laudo
Terminologia padronizada em português; lateralidade explícita; medidas com unidade; achado + localização + gravidade; impressão diagnóstica coerente com os achados; campo de comparação com exame prévio; recomendações apenas quando respaldadas.

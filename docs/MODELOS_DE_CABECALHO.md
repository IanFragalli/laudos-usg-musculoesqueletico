# Moldes de cabeçalho (seletor "Cabeçalho")

Na barra superior do app há o seletor **Cabeçalho**. Ele troca o topo, o bloco de dados do paciente e o rodapé da folha A4 e da impressão/PDF. A escolha fica lembrada neste navegador (só o nome do molde; nenhum dado de paciente é gravado).

## Moldes disponíveis
- **Particular** (padrão): Dr. Ian Almeida Fragalli com logos (SBOT/OTP e pé), título/registros, campos Paciente / Data / Médico solicitante, marca d'água suave e assinatura no rodapé.
- **CREB Tatuapé**: logo CREB (extraído do papel timbrado da clínica) com a legenda "Centro de Reumatologia e Ortopedia Botafogo" (nome da rede), linha, Paciente + **Data de emissão** (campo **Data** da barra), Médico solicitante (sem o item Atendimento e sem data de nascimento), linha, laudo, assinatura e, no fim, o endereço centralizado: Rua Apucarana, 1619 – Tatuapé, São Paulo - SP / Telefone e WhatsApp: (11) 5180-2222. Sem marca d'água.

## Como adicionar um novo molde
No `index.html`, procure `const TIMBRADOS = [` e copie um dos blocos. Troque:
- `id` (sem espaços) e `nome` (o que aparece no seletor);
- `marca` (`true` = marca d'água) e `nasc` (`true` = mostra o campo Nascimento);
- `head()`, `ident()` e `foot()` — HTML do topo, dos dados do paciente e do rodapé.

Elementos com estes ids são preenchidos sozinhos, se existirem no molde: `oPac` (paciente), `oDt` (data), `oEmi` (data de emissão), `oNasc` (nascimento), `oSol` (solicitante). CSS próprio do molde: `.sheet[data-tm="<id>"] { ... }`. Imagens devem ser embutidas (data URI) para o app continuar offline.

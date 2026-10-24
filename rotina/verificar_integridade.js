// Verificação de integridade do banco de textos do LaudoFlow.
// Uso: node rotina/verificar_integridade.js [caminho/index.html]
// Confere: marcadores {{...}} com catálogo, colchetes/chaves balanceados, achados sem texto,
// nomes duplicados no mesmo grupo, catálogos sem uso e grafias antigas já corrigidas.
const fs = require("fs");
const h = fs.readFileSync(process.argv[2] || "index.html", "utf8");
const D = JSON.parse(h.match(/const D = (\{.*\});\s*$/m)[1]);
const cat = D.catalogos, usados = new Set();
let erros = 0; const err = (...a) => { erros++; console.log("ERRO", ...a); };
const antigas = /ruptura|hipoec[óo]gên|estilóide|bicipito-radial/i; // ruptura→rotura; bicipito-radial→bicipitorradial; estilóide→estiloide
D.segmentos.forEach(s => {
  const w = (o, p) => {
    if (typeof o === "string") {
      (o.match(/\{\{(\w+)\}\}/g) || []).forEach(m => { const k = m.slice(2, -2); usados.add(k); if (!(k in cat)) err("sem catálogo", s.key, p, k); });
      if ((o.match(/\[\[/g) || []).length !== (o.match(/\]\]/g) || []).length) err("colchetes", s.key, p);
      if ((o.match(/\{\{/g) || []).length !== (o.match(/\}\}/g) || []).length) err("chaves", s.key, p);
      if (/ruptura|estilóide|bicipito-radial/i.test(o)) err("grafia fora do padrão", s.key, p, o.slice(0, 60));
      if (/ {2}/.test(o)) err("espaço duplo", s.key, p);
    } else if (o && typeof o === "object") for (const k in o) w(o[k], p + "/" + k);
  };
  w(s, "");
  s.grupos.forEach(g => { const n = {};
    g.achados.forEach(a => { if (!a.texto) err("achado sem texto", s.key, a.nome); n[a.nome] = (n[a.nome] || 0) + 1; });
    Object.entries(n).filter(e => e[1] > 1).forEach(e => err("nome duplicado", s.key, g.titulo, e[0])); });
});
Object.keys(cat).filter(k => !usados.has(k)).forEach(k => err("catálogo sem uso", k));
console.log(erros ? erros + " problema(s)" : "OK — sem problemas de integridade (" + D.segmentos.length + " segmentos, " + Object.keys(cat).length + " catálogos)");
process.exit(erros ? 1 : 0);

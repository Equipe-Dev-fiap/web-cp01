//questao 1 
let nomeVinho;
let tipoUva = "";
let precoGarrafa = 59.90;

console.log("=== Cadastro de Vinho ===");
console.log("Nome do vinho:", nomeVinho);
console.log("Tipo de uva:", tipoUva);
console.log("Preço da garrafa: R$", precoGarrafa);

//questao 2 
let tipoVinho = prompt("Qual o tipo de vinho? (Tinto ou Branco)");
let idadeCliente = parseInt(prompt("Qual a sua idade?"));

// Operações com operadores ==, !=, >=
let ehTinto = tipoVinho == "Tinto";
let naoEhBranco = tipoVinho != "Branco";
let podeComprar = idadeCliente >= 18;

console.log("Resultados:\n" +
  "O vinho é tinto? " + ehTinto + "\n" +
  "O vinho NÃO é branco? " + naoEhBranco + "\n" +
  "O cliente pode comprar vinho? (idade >= 18): " + podeComprar);




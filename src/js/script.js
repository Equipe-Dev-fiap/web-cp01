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

//Questão 3
// Coleta de dados
let peso = parseFloat(prompt("Digite seu peso (kg):"));
let altura = parseFloat(prompt("Digite sua altura (em metros):"));

// Cálculo do IMC
let imc = peso / (altura * altura);

// Determinação da faixa por categoria (classificada por código)
let faixa = "";

if (imc < 18.5) {
  faixa = "abaixo";
} else if (imc >= 18.5 && imc <= 24.9) {
  faixa = "ideal";
} else {
  faixa = "acima";
}

// Switch case para mensagem baseada na faixa
switch (faixa) {
  case "abaixo":
    console.log("Seu IMC é " + imc.toFixed(2) + ". Você está abaixo do peso.");
    break;
  case "ideal":
    console.log("Seu IMC é " + imc.toFixed(2) + ". Você está no peso ideal.");
    break;
  case "acima":
    console.log("Seu IMC é " + imc.toFixed(2) + ". Você está acima do peso.");
    break;
  default:
    console.log("Não foi possível calcular sua faixa de IMC.");
}
//Questão 4
for (let i = 1; i <= 50; i++) {
    console.log("Garrafa número " + i + ": O valor é excelente para a nossa vinheria!");
  }
//Questão 5
// Dados cadastrados (usuário da vinheria)
const usuarioCadastrado = "admin";
const senhaCadastrada = "1234";

// Entrada do usuário
let usuario = prompt("Digite seu nome de usuário: ");
let senha = prompt("Digite sua senha: ");

// Verificação de login
if (usuario === usuarioCadastrado && senha === senhaCadastrada) {
  console.log("✅ Login realizado com sucesso! Bem-vindo à Vinheria.");
} else {
  console.log("❌ Falha na autenticação. Nome de usuário ou senha incorretos.");
}

  



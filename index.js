const prompt = require('prompt-sync');
const entrada = prompt();

let idade = 17;
const anoNascimento = 2006;
let anoAtual = 2024;
const nomeCompleto = "Vitória Pereira";

console.log("Meu nome é " + nomeCompleto + " nascida no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos ");

anoAtual = anoAtual + 1;

console.log(anoAtual);

idade = idade + 1;
console.log(idade);

//Agência de viagens Hawaii Paris Nova York Rio de Janeiro Tóquio
const listaDeDestinos = new Array(
  "Hawaii",
  " Paris",
  " Nova York",
  " Rio de Janeiro",
  " Tóquio"
);

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel vivida");
listaDeDestinos.push("Curitiba")
listaDeDestinos.push("Auracária");
listaDeDestinos.push("Barcelona");
console.log(listaDeDestinos);

var nomeComprador = entrada("Digite seu nome: ");
var idadeComprador = entrada("Qual a sua Idade?");

if(idadeComprador >= 18) {
  console.log("Olá senhor(a) " + nomeComprador);
  console.log("Comprador maior de idade");
  console.log("destinos disponíveis: " + listaDeDestinos);
} else {
  console.log("Olá senhor(a) " + nomeComprador);
  console.log("Não foi possível consluir a compra");
  console.log("Você é menor de idade");
}


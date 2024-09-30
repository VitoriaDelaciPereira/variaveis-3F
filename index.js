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

const loginCerto = "vitória";
const senhaCerta = 123;

var login = entrada("Qual é o seu login? ");
var senha = entrada("Digite sua senha: ");

while(login != loginCerto || senha != senhaCerta){
  console.log ("Login ou senha incorretos");
  login = entrada("Qual o seu login? ");
  senha = entrada("Digite sua senha: ");
}

var nomeComprador = entrada("Digite seu nome: ");
var idadeComprador = entrada("Qual a sua Idade?");

if(idadeComprador >= 18) {
  console.log("Olá senhor(a) " + nomeComprador);
  console.log("Comprador maior de idade");
  console.log("Escolha seu destino")
  
  var contador = 0;

  while(contador <9){
    console.log(listaDeDestinos[contador]);
    contador++;
  }
  var destino = entrada("Digite o número que corresponde ao destino selecionado (0-8)");
  console.log(`destino selecionado foi: ${listaDeDestinos[destino]}`);
} else {
  console.log("Olá senhor(a) " + nomeComprador);
  console.log("Não foi possível consluir a compra");
  console.log("Você é menor de idade");
}


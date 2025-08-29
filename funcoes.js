// Função declarativa
function saudacao(nome) {
    return `olá, ${nome}!`
}
console.log(saudacao("Raphael"))

//funçõa anonima = sem nome
const soma = function(a, b) {
    return a + b;
}
console.log(("Função Anonima: "))
console.log(soma(20, 10))
console.log(soma(1, 10))
console.log(soma(-10, 10))
//Merda
function simples(){
    let a = 10;
    let b = 10;
    let c = a + b
    console.log(("O valor de C é: " + c))
}

simples()
//arrow function
console.log(("Função Arrow: "))
const multiplicar = (a, b) => a * b;


console.log(multiplicar(5, 5))
console.log(multiplicar(10, 5))
console.log(multiplicar(2, 5))

function somar(a, b){
    return a + b;
} 

console.log(somar(5, 10))

//função passar parametros
function cumprimentar(nome = "Raphael") {
   return `Salve, ${nome}!`  
}

//função auto invocada
(function(){
     console.log("funcão auto invocada");    
})();

function processar(valor, callback){
    const resultado = callback(valor);
    console.log(`Resultado: ${resultado}`);
}

async function processarAsync(valor, callback) {
    const resultado = await callback(valor);
    console.log(`Resultado: ${resultado}`);
}
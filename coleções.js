let numeros = [1, 2, 3, 4, 5];
console.log("Array geral", numeros);
console.log("Array posição 0", numeros[0]);
console.log("Array posição 2", numeros[2]);

let frutas = ["Banana", "Maçã", "Uva", "Pera"];
frutas.push("Laranja");
frutas.unshift("Morango");
console.log("Array frutas", frutas);

frutas.forEach((frutas, index) => {
    console.log(`A fruta ${frutas} está na posição ${index}`);
});

let misto =[1, "cachorro", true, null, {chave: "valor"} , [1, 2, 3]]
console.log("Array misto", misto);
console.log( misto.length)
console.log( misto[misto.length -1]) 

for (let i = 0 ; i < frutas.length ; i++){
    console.log(`A fruta ${frutas[i]} está na posição ${i}`);
}

for (let fruta of frutas){
    console.log(fruta);
}

for (let indice in frutas){
    console.log(`indice${indice} : ${frutas[indice]}`);
}

frutas.pop();
frutas.shift();
frutas.splice(1, 3);
console.log(frutas);

let mapa = new Map();
mapa.set("nome", "Raphael");
mapa.set("idade", 19);
 
console.log(mapa.get("nome"));

console.log(mapa.has("altura"))

mapa.delete("idade")
mapa.clear()
console.log(mapa.size)

let conjunto = new Set([1, 2, 3, 4, 5, 6]);
console.log(conjunto);
conjunto.add(7);
conjunto.delete(3);

conjunto.forEach((valor) => console.log(valor));

let pessoa = {
    nome: "Raphael",
    idade: 19,
    altura: 1.82,
    curso: "Análise e Desenvolvimento de Sistemas",
    endereco: {
        rua: "Rua A",
        numero: 123
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.endereco["rua"]);
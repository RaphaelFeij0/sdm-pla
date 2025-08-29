function ExibirIdade (idade) {
    return `Você tem ${idade} anos!`
}
console.log(ExibirIdade(19))

const altura = function(altura) {
    return `Você tem ${altura} de altura!`
}
console.log(altura(1.82))

const curso = (curso) => curso;
console.log(curso("Análise e Desenvolvimento de Sistemas"))


const imprimir = function(idade, altura, curso){
 console.log`Você tem ${idade} anos, ${altura} de altura e estuda ${curso}`
}

/*
Codigo otimizado do copilot


const exibirIdade  = idade  => `Você tem ${idade} anos!`;
const exibirAltura = altura => `Você tem ${altura}m de altura!`;
const exibirCurso  = curso  => `Você estuda ${curso}`;

const imprimir = (idade, altura, curso) => {
  console.log(
    `${exibirIdade(idade)}
${exibirAltura(altura)}
${exibirCurso(curso)}`
  );
};

imprimir(19, 1.82, "Análise e Desenvolvimento de Sistemas");


 */
 
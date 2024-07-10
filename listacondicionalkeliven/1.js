function promptNum(message, nullable = false) {
    const input = Number(prompt(message))
    if (nullable && !input)
        return null
    if (!Number(input)) {
        alert("Entrada inválida! Digite um número")
        promptNum(message)
    }
    return input
}

function SomarNumeros(){
    const a = Number(prompt())
    const b = Number(prompt())
    const c = Number(prompt())
    if (a+b > c){
        alert ("a soma entre " + a + "  +  " + b + " é maior doque " + c)
    }
    else{
        alert ("a soma entre " + a + "  +  " + b + " é menor doque " + c)
    }
}
function LerDoisvalores(){
    const a = Number(prompt())
    const b = Number(prompt())
    let c
    if (a===b){
        c = (a+b)
    }
    else{
        c = (a*b)
    }
    alert(c)
}

function antecessoresucessor(){
    const n1 = Number(prompt())
    let sucessor = (n1 + 1)
    let antecessor = (n1 - 1)
    alert("o sucessor de " + n1 + " é: " + sucessor + " e o antecessor é: " + antecessor)
}

function salarioMinimo(){
    const salariopessoa = Number(prompt())
    let quantossalarios = (salariopessoa / 1293.20)
    alert("você ganha " + quantossalarios.toFixed(3) + " salarios minimos")
}

function ordemdecrescente(){
    const nums = [
        promptNum("Digite o primeiro número"),
        promptNum("Digite o segundo número"),
        promptNum("Digite o terceiro número")
    ]

    alert("Números em ordem decrescente: "+ nums.sort((a, b) => a - b))
}
function IMC(){
    const peso = Number(prompt())
    const altura = Number(prompt())
let imc = peso / (altura ** 2);
let condicao;
if (imc < 18.5) {
    condicao = 'Abaixo do peso';
} else if (imc >= 18.5 && imc <= 24.9) {
    condicao = 'Peso ideal (parabéns)';
} else if (imc >= 25.0 && imc <= 29.9) {
    condicao = 'Levemente acima do peso';
} else if (imc >= 30.0 && imc <= 34.9) {
    condicao = 'Obesidade grau I';
} else if (imc >= 35.0 && imc <= 39.9) {
    condicao = 'Obesidade grau II (severa)';
} else {
    condicao = 'Obesidade grau III (mórbida)';
}
alert(`Seu IMC é ${imc.toFixed(1)}. Condição: ${condicao}`);
}

function media(){
    const nota1 = Number(prompt())
    const nota2 = Number(prompt())
    const nota3 = Number(prompt())
    let media = (nota1 + nota2 + nota3) / 3;
    alert('A média das notas é: '+ media +'.');    
}

function notas(){
    let nome = "Maria";
    const nota1 = Number(prompt())
    const nota2 = Number(prompt())
    const nota3 = Number(prompt())
    const nota4 = Number(prompt())
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    let situacao;
    if (media >= 7.0) {
    situacao = 'Aprovado';
    } else {
    situacao = 'Reprovado';
    }
    alert('Aluno: ' + nome);
    alert('Média das notas: '+ media);
    alert('Situação: '+ situacao);
}

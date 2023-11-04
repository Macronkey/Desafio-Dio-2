let vitorias = 250
let derrotas = 200

let resultado1 = main(vitorias,derrotas)
let resultado2 = soma(vitorias,derrotas)

function soma(numA, numB){
    let somatorio = numA - numB
    return somatorio
}

function match(num){
    if (num <= 10){
        rank = "Ferro"
    } else if (num <= 20){
        rank = "Bronze"
    } else if (num <= 50){
        rank = "Prata"
    } else if (num <= 80){
        rank = "Ouro"
    } else if (num <= 90){
        rank = "Diamante"
    } else if (num <= 100){
        rank = "Lendário"
    } else {
        rank = "Imortal"
    }
return rank
}

function main(num1,num2){
    result = soma(num1,num2)
    final = match(result)
    return final
}

console.log("O Herói tem de saldo de "+ resultado2 + " vitórias e está no nível "+ resultado1)
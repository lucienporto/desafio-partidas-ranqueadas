const prompt = require("prompt-sync")({ sigint: true });
let vitorias
let derrotas
let saldoVitorias
let nivelHeroi
let finalizarCalculo = false

do {
    vitorias = prompt("\nDigite a quantas partidas foram vencidas: ")
    parseInt(vitorias)
    derrotas = prompt("Digite a quantas partidas foram perdidas: ")
    parseInt(derrotas)

    Ranqueadas()
    let calcular = prompt("\nDeseja realizar outro cálculo? S/N: ").toUpperCase()
    if (calcular == "N") {
        finalizarCalculo = true
    }
} while (finalizarCalculo != true)

console.log("Esperamos te ver de novo. Bom jogo!")

function Ranqueadas(venceu, perdeu) {
    venceu = vitorias
    perdeu = derrotas
    saldoVitorias = venceu - perdeu
    VerificaNivel()
    if (saldoVitorias <= 0){
        console.log("\nO Herói tem de saldo de 0 vitórias e está no nível de " + nivelHeroi + ".")
    } else {
        console.log("\nO Herói tem de saldo de " + saldoVitorias + " vitórias e está no nível de " + nivelHeroi + ".")
    }
}

function VerificaNivel() {
    if(saldoVitorias <= 10) {
        nivelHeroi = "Ferro"
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivelHeroi = "Bronze"
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivelHeroi = "Prata"
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivelHeroi = "Ouro"
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivelHeroi = "Diamante"
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivelHeroi = "Lendário"
    } else {
        nivelHeroi = "Imortal"
    }
}
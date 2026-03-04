
function calcularRankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;
    let heroi = "Dyeni";

    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return saldoVitorias + heroi + " | " + nivel;
}

let vitorias = 50;
let derrotas = 30;

// Chamando a função
let resultado = calcularRankeadas(vitorias, derrotas);

// Separando o saldo e nível
let saldo = vitorias - derrotas;
let nivelFinal = resultado.split(" | ")[1];
let heroi = "Dyeni";


console.log(`A ${heroi} tem o saldo ${saldo} e está no nível de ${nivelFinal}`)
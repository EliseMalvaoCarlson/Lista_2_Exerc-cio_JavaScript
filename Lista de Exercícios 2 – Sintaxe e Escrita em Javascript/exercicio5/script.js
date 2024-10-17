/*Escreva uma função somaMatriz que receba uma matriz (array 2D) de números e retorne a soma
de todos os elementos da matriz.

A função somaMatriz deve receber uma matriz (ou seja, um array bidimensional) de números e retornar
a soma de todos os elementos dessa matriz.

Passos para Implementação
1 - Receber a Matriz: A função deve aceitar um parâmetro que será a matriz de números.
2- Iterar sobre a Matriz: Precisamos percorrer cada linha da matriz e, dentro de cada
linha, cada elemento.
3- Somar os Elementos: Acumular a soma de todos os elementos da matriz.
4- Retornar a Soma: Após percorrer todos os elementos, retornar o valor acumulado */

function somaMatriz(matriz) {
    let soma = 0;

    // Itera sobre cada linha da matriz
    for (let i = 0; i < matriz.length; i++) {
        // Itera sobre cada elemento da linha
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }

    return soma;
}

// Exemplo de uso
const matrizExemplo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(somaMatriz(matrizExemplo)); // Saída: 45



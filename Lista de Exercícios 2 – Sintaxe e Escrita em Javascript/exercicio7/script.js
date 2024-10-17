/* Escreva uma função multiplicarMatrizes que receba duas matrizes e retorne a multiplicação delas, 
se possível. Lembre-se que, para multiplicar matrizes, o número de colunas da primeira deve ser 
igual ao número de linhas da segunda. */

function parseMatriz(input) {
    return input.split(';').map(linha => linha.split(',').map(Number));
}

function multiplicarMatrizes() {
    const matriz1 = parseMatriz(document.getElementById('matriz1').value);
    const matriz2 = parseMatriz(document.getElementById('matriz2').value);

    if (matriz1[0].length !== matriz2.length) {
        document.getElementById('resultado').textContent = 'O número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz.';
        return;
    }

    const resultado = [];
    for (let i = 0; i < matriz1.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz2[0].length; j++) {
            resultado[i][j] = 0;
            for (let k = 0; k < matriz1[0].length; k++) {
                resultado[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado.map(linha => linha.join(', ')).join('; ')}`;
}

/* Explicação
HTML: Cria um formulário simples onde o usuário pode inserir duas matrizes. Cada matriz é inserida como uma string, onde os números são separados por vírgulas e as linhas são separadas por ponto e vírgula.
JavaScript:
parseMatriz: Converte a string de entrada em uma matriz de números.
multiplicarMatrizes: Verifica se as matrizes podem ser multiplicadas (o número de colunas da primeira matriz deve ser igual ao número de linhas da segunda). Se puderem, multiplica as matrizes e exibe o resultado.

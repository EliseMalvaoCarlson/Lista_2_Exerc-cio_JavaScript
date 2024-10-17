function substituirElemento(array, valorAntigo, valorNovo) {
    return array.map(elemento => elemento === valorAntigo ? valorNovo : elemento);
}

// Exemplo de uso
const arrayOriginal = [1, 2, 3, 2, 4, 2];
const valorAntigo = 2;
const valorNovo = 5;

const arrayModificado = substituirElemento(arrayOriginal, valorAntigo, valorNovo);

document.getElementById('resultado').textContent = `Array modificado: ${arrayModificado}`;

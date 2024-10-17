function ehPalindromo(str) {
    // Remove caracteres não alfanuméricos e converte para minúsculas
    const strLimpa = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Inverte a string limpa
    const strInvertida = strLimpa.split('').reverse().join('');
    // Compara a string limpa com a string invertida
    return strLimpa === strInvertida;
}

function verificarPalindromo() {
    const input = document.getElementById('texto').value;
    const resultadoDiv = document.getElementById('resultado');
    
    if (ehPalindromo(input)) {
        resultadoDiv.innerHTML = `<p>"${input}" é um palíndromo!</p>`;
    } else {
        resultadoDiv.innerHTML = `<p>"${input}" não é um palíndromo.</p>`;
    }
}

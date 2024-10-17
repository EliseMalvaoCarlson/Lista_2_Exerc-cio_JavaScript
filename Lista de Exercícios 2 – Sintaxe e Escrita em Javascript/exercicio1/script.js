
function contarOcorrencias() {
    const input = document.getElementById('numeros').value;
    const array = input.split(',').map(num => num.trim()).filter(num => !isNaN(num) && num !== '').map(Number);

    if (array.length === 0) {
        document.getElementById('resultado').textContent = 'Por favor, insira números válidos.';
        return;
    }

    const frequencia = array.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    document.getElementById('resultado').textContent = JSON.stringify(frequencia, null, 2);
}



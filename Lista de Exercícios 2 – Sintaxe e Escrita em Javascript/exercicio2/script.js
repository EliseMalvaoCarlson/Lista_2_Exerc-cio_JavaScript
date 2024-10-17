/* Crie uma função chamada ordenarPorIdade que receba um array de objetos representando 
pessoas, cada uma com nome e idade. A função deve retornar o array ordenado pela idade em 
ordem crescente.*/

const pessoas = [];

function adicionarPessoa() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);

    if (nome && !isNaN(idade)) {
        pessoas.push({ nome, idade });
        document.getElementById('nome').value = '';
        document.getElementById('idade').value = '';
        exibirPessoas();
    } else {
        alert('Por favor, insira um nome e uma idade válidos.');
    }
}

function exibirPessoas() {
    const resultado = document.getElementById('resultado');
    resultado.textContent = pessoas.map(pessoa => `${pessoa.nome}, ${pessoa.idade} anos`).join('\n');
}

function ordenarPorIdade(pessoas) {
    return pessoas.sort((a, b) => a.idade - b.idade);
}

function ordenarPessoas() {
    const pessoasOrdenadas = ordenarPorIdade(pessoas);
    document.getElementById('resultado').textContent = pessoasOrdenadas.map(pessoa => `${pessoa.nome}, ${pessoa.idade} anos`).join('\n');
}

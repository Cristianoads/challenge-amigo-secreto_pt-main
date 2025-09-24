//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let listaAmigos = document.getElementById('listaAmigos');
    
    // Validação solicitada para evitar nomes vazios ou com espaços em branco
    let nome = amigoInput.value.trim();
    if (nome === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }

    // Validação para evitar nomes repetidos
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    // Adicionando o nome ao array
    amigos.push(nome);

    // Atualizando a lista de nomes na tela
    listaAmigos.innerHTML = listaAmigos.innerHTML + `<li role="listitem">${nome}</li>`;
    
    // Limpar o campo de input
    amigoInput.value = '';
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    // Validação: exige no mínimo 4 participantes para um sorteio justo de amigo secreto
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para sortear!');
        return;
    }

    // Chamar a função para embaralhar o array de amigos
    embaralhar(amigos);

    // Exibe o resultado do sorteio na tela
    resultado.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let sorteado = (i + 1 === amigos.length) ? amigos[0] : amigos[i + 1];
        resultado.innerHTML = resultado.innerHTML + `<p>${amigos[i]}  -->  ${sorteado}</p>`;
    }
}

// Função que embaralha os itens de uma lista usando o algoritmo de Fisher-Yates
function embaralhar(lista) {
    for (let i = lista.length; i; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);
        [lista[i - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}
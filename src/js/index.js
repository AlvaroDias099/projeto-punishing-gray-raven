const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth' });
        } 
        removerSelecaoDOPersonagem();

        personagem.classList.add('selecionado');

        alteraImagemPersonagemSelecionado(personagem);

        alteraNomePersoangem(personagem);

        alteraDescricaoPersoangem(personagem);
    })
})

function alteraDescricaoPersoangem(personagem) {
    const descricaoPersoangem = document.getElementById('descricao-personagem');
    descricaoPersoangem.innerText = personagem.getAttribute('data-description');
}

function alteraNomePersoangem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alteraImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    //passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagem/card-${idPersonagem}.png`;
}

function removerSelecaoDOPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

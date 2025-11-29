const html = document.querySelector('html');
const focoBotao = document.querySelector('.app__card-button--foco');
const curtoBotao = document.querySelector('.app__card-button--curto');
const longoBotao = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');    

focoBotao.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco');
    banner.setAttribute('src', '/imagens/foco.png');
});

curtoBotao.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
    banner.setAttribute('src', '/imagens/descanso-curto.png');
});
longoBotao.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
    banner.setAttribute('src', '/imagens/descanso-longo.png');
});

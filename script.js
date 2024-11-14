
const btnMobile = document.getElementById('btn-mobile');

function abrirMenu() {
    const navContatos = document.getElementById('nav-contatos');
    navContatos.classList.toggle('active');
}

btnMobile.addEventListener('click', abrirMenu);
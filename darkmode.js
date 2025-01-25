document.addEventListener('DOMContentLoaded', () => {
    let trilho = document.getElementById('trilho');
    let body = document.body;
    let menu = document.getElementById('menu');
    let letras = document.getElementById('letras');
    let positivo = document.getElementById('positivo');
    let negativo = document.getElementById('negativo');

    if (trilho) {
        trilho.addEventListener('click', () => {
            trilho.classList.toggle('dark');
            body.classList.toggle('dark');
            if (menu) menu.classList.toggle('dark');
            if (letras) letras.classList.toggle('dark');
            if (positivo) positivo.classList.toggle('dark');
            if (negativo) negativo.classList.toggle('dark');
        });
    }
});

function changeFontSize(action) {
    const container = document.getElementById('letras');
    const elements = ['h1', 'p', 'h2', 'li'];
    elements.forEach(element => {
        const selectors = container.querySelectorAll(element);
        selectors.forEach(selector => {
            let value = getComputedStyle(selector).getPropertyValue('font-size');
            value = value.replace('px', '');
            value = action === '+' ? parseInt(value) + 1 : parseInt(value) - 1;
            selector.style.fontSize = `${value}px`;
        });
    });
}

function darkmode() {
  document.body.classList.toggle('dark-mode');
}

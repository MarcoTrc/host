class Heading {
    render(nomePagina) {
        const h1 = document.createElement('h1');
        const body = document.querySelector('body');
        h1.innerHTML = 'Applicazione ' + nomePagina;
        body.appendChild(h1);
    }
}

export default Heading;
import webp from './webp.png';


class HostImage {
    render() {
        const immagine = document.createElement('img');
        immagine.src = webp;
        immagine.alt = 'Host';

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(immagine);
    }
}

export default HostImage;
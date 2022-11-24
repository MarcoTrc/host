import "./index.css";
import Heading from './components/heading.js'
import HostImage from './components/img/image.js'

const heading = new Heading();
heading.render('Host');
const img = new HostImage();
img.render();

import('iframe/HTMLesposto')
.then(pippo => {
    const HTMLesposto = pippo.default
    console.log(HTMLesposto);
    var container = document.createElement('div');
    container.innerHTML = HTMLesposto;
    document.body.appendChild(container)
})

import('remote/Remote')
.then(RemoteModule => {
    const Remote = RemoteModule.default;
    const remote = new Remote();
    remote.render()
});



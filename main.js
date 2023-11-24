
const year = new Date().getFullYear();
const derechosReservados = document.getElementById('derechos-reservados');

const iconNav = document.getElementById('icono-nav');
const links = document.querySelectorAll('#links a');

const btnEnviarMensaje = document.getElementById('btn-enviar');


derechosReservados.innerText += ' '  + year; 

iconNav.addEventListener('click', responsiveMenu);

function responsiveMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('responsive');
}

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(otrosLinks => {
            otrosLinks.classList.remove('seleccionado');
            link.classList.add('seleccionado');

            responsiveMenu();
        });
    });
});

window.onscroll = function() {
    efectoBarraHabilidades();
}

function efectoBarraHabilidades() {
    const skills = document.getElementById('skills');
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if(distancia_skills >= 300) {
        document.getElementById('html').classList.add('barra-progreso1');
        document.getElementById('js').classList.add('barra-progreso2');
        document.getElementById('bd').classList.add('barra-progreso3');
        document.getElementById('php').classList.add('barra-progreso4');

        document.getElementById('c-sharp').classList.add('barra-progreso2');
        document.getElementById('c++').classList.add('barra-progreso5');
        document.getElementById('bd-sql').classList.add('barra-progreso4');
        document.getElementById('wf').classList.add('barra-progreso4');

        document.getElementById('flutter').classList.add('barra-progreso5');
        document.getElementById('java').classList.add('barra-progreso5');
    }
}

//FORM ENVIAR MENSAJE
function enviarMensaje(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    let urlWhatssapp = 'https://wa.me/59176110686?text=';
    let mensajePersonalizado = 'Hola, soy ' + nombre + '. Mi email es ' + email + ' y mi mensaje es el siguiente: \n' + mensaje;

    urlWhatssapp += mensajePersonalizado;

    window.location.href = urlWhatssapp;


}

btnEnviarMensaje.addEventListener('click', enviarMensaje);





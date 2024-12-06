// Selecciona todos los elementos con la clase "expandable-container"
//const containers = document.querySelectorAll('.expandable-container');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#navbar a');
// Referencia al body para cambiar su fondo
//const body = document.body; 

function toggleInfo(containerId, containerId2) {
    const container = document.getElementById(containerId);
    const container2 = document.getElementById(containerId2);

    const extraInfo = container.querySelector('.extra-info');

    if (extraInfo.style.display === 'none') {
        extraInfo.style.display = 'block';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.height = '300px';
        container.style.width = '350px';
        container2.style.display = 'none';
        

    } else {
        extraInfo.style.display = 'none';
        container.style.height = '130px';
        container.style.width = '160px'
        setTimeout(() => {
            container2.style.display = '';
        }, 400);
    }
}



function startWaveAnimation() {
    const textElements = document.querySelectorAll('label');

    textElements.forEach(label => {
        const text = label.textContent;
        label.innerHTML = text.split('').map((char, index) =>
            `<span style="animation-delay: ${index * 0.3}s">${char}</span>`
        ).join('');
    });
}

startWaveAnimation(); // Inicia la animación

// Navegación para mostrar contenedores específicos
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetIndex = this.getAttribute('data-target');

        containers.forEach((container, index) => {
            if (index == targetIndex) {
                container.classList.add('expanded');
                container.classList.remove('hidden');
                CambiarDeImagen(index);
            } else {
                container.classList.remove('expanded');
                container.classList.add('hidden');
            }
        });
    });
});

function CambiarDeImagen(index){
    switch (index) {
        case 0:
            body.style.backgroundImage = "url('/img/rojoNegro.jpg')";
            body.style.backgroundSize = "cover";
            body.style.backgroundPosition = "center"; 
            break;
        case 1:
            body.style.backgroundImage = "url('/img/azulNegro.jpg')";
            body.style.backgroundSize = "cover";
            body.style.backgroundPosition = "center"; 
            break;
        default:
            body.style.backgroundColor = "#FFFFFF";
            break;
    }
};

const personaje = document.getElementById('player');

personaje.addEventListener('click', () => {
    personaje.classList.add('correr-derecha');
    
    if (personaje.classList.contains('correr-derecha')) {
        console.log("Estado: Corriendo");
    } else {
        console.log("Estado: Quieto");
    }
});



document.querySelectorAll('[data-language]').forEach(btn => {
    btn.addEventListener('click', async () => {
        const lang = btn.dataset.language;

    
        localStorage.setItem('language', lang);

        cargarIdioma(lang);
    });
});

async function cargarIdioma(lang) {
    try {
        const response = await fetch(`./lenguajes/${lang}.json`);

        if (!response.ok) {
            throw new Error(`${lang}.json (Error ${response.status})`);
        }

        const data = await response.json();

        document.querySelectorAll('[data-section]').forEach(el => {
            const sec = el.dataset.section;
            const val = el.dataset.value;

            if (data[sec] && data[sec][val]) {
                el.innerText = data[sec][val];
            }
        });

    } catch (error) {
        console.error(`[ERROR CRÍTICO]:`, error);
        alert(`No se pudo cargar "${lang}"`);
    }
}


const idiomaGuardado = localStorage.getItem('language');

if (idiomaGuardado) {
    cargarIdioma(idiomaGuardado);
}

window.addEventListener('storage', (e) => {
    if (e.key === 'language') {
        cargarIdioma(e.newValue);
    }
});



const personaje = document.getElementById('player');

personaje.addEventListener('click', () => {
    personaje.classList.add('correr-derecha');

    if (personaje.classList.contains('correr-derecha')) {
        console.log("Estado: Corriendo");
    } else {
        console.log("Estado: Quieto");
    }
});
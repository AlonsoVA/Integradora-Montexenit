function ajustarMapa() {
    const img = document.getElementById("mapa-img");
    const areas = document.querySelectorAll("map[name='mapa'] area");

    // Obtener las dimensiones originales de la imagen
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;

    // Obtener las dimensiones actuales de la imagen redimensionada
    const currentWidth = img.clientWidth;
    const currentHeight = img.clientHeight;

    // Calculamos la escala en base a las dimensiones originales y actuales
    const scaleX = currentWidth / naturalWidth;
    const scaleY = currentHeight / naturalHeight;

    // Recorremos cada área para actualizar sus coordenadas
    areas.forEach(area => {
        const originalCoords = area.dataset.coords.split(',').map(Number); // Convertir coordenadas a números
        const newCoords = originalCoords.map((coord, index) => {
            // Si el índice es par, ajustamos según el ancho, si es impar, según el alto
            return (index % 2 === 0) ? Math.round(coord * scaleX) : Math.round(coord * scaleY);
        });
        // Aplicar las nuevas coordenadas al atributo coords
        area.coords = newCoords.join(',');
    });
}

// Ejecutar la función al cargar la ventana y al redimensionarla
window.addEventListener('load', ajustarMapa);
window.addEventListener('resize', ajustarMapa);

const area = document.getElementById('area1');
const thumbnail = document.getElementById('thumbnail');

// Mostrar miniatura al pasar el cursor
area.addEventListener('mouseenter', () => {
    thumbnail.style.visibility = 'visible';
});

// Mover miniatura con el cursor
area.addEventListener('mousemove', (event) => {
    thumbnail.style.top = event.pageY + 10 + 'px';
    thumbnail.style.left = event.pageX + 10 + 'px';
});

// Ocultar miniatura cuando el cursor salga del área
area.addEventListener('mouseleave', () => {
    thumbnail.style.visibility = 'hidden';
});
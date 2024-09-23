document.getElementById('sueldoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el sueldo ingresado por el usuario
    let sueldo = parseFloat(document.getElementById('sueldo').value);
    
    // Verificar que el sueldo sea un número válido
    if (isNaN(sueldo) || sueldo <= 0) {
      document.getElementById('resultado').textContent = "Por favor, introduce un sueldo válido.";
      return;
    }

    // Realizar los cálculos
    let porcentajeMensualidad = 0.30; // 30% del sueldo para la mensualidad
    let mensualidad = sueldo * porcentajeMensualidad;
    let enganche = mensualidad * 12; // Ejemplo: 12 mensualidades como enganche

    // Mostrar el resultado en la página
    document.getElementById('resultado').innerHTML = `
      Con tu sueldo de $${sueldo.toFixed(2)}, podrías pagar:
      <ul>
        <li>Mensualidad: $${mensualidad.toFixed(2)}</li>
        <li>Enganche estimado (12 mensualidades): $${enganche.toFixed(2)}</li>
      </ul>`;
  });
document.getElementById('btnVerificar').addEventListener('click', function() {
    let inputEdad = document.getElementById('edad').value;

    if (inputEdad.trim() === '' || isNaN(inputEdad) || parseInt(inputEdad) <= 0) {
        alert('Por favor, ingresa una edad válida y positiva.');
        return;
    }

    let edad = parseInt(inputEdad);

    if (edad >= 18) {
        document.getElementById('resultado').value = "Puedes votar";
    } else {
        document.getElementById('resultado').value = "No puedes votar";
    }
});
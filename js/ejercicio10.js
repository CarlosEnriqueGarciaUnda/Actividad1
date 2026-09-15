document.getElementById('btnConvertir').addEventListener('click', function() {
    let inputCelsius = document.getElementById('celsius').value;

    if (inputCelsius === '' || isNaN(inputCelsius)) {
        alert('Por favor, ingresa un valor numérico válido.');
        return;
    }

    let c = parseFloat(inputCelsius);
    let f = (c * 9/5) + 32;

    document.getElementById('fahrenheit').value = f.toFixed(2) + " °F";
});
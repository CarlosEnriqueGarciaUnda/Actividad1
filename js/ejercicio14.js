document.getElementById('btnCalcular').addEventListener('click', function() {
    let inputCadena = document.getElementById('numeros').value;

    if (inputCadena.trim() === '') {
        alert('Ingresa una lista de numeros separados por coma.');
        return;
    }

    let arregloCadenas = inputCadena.split(",");

    let numeros = arregloCadenas.map(Number);

    if (numeros.some(isNaN)) {
        alert('Ingresar unicamente numeros validos separados por comas.');
        return;
    }

    let mayor = Math.max(...numeros);

    let menor = Math.min(...numeros);

    let suma = numeros.reduce((acum, val) => acum + val, 0);
    let promedio = suma / numeros.length;

    document.getElementById('numMayor').value = mayor;
    document.getElementById('numMenor').value = menor;
    document.getElementById('promedio').value = promedio.toFixed(2);
});
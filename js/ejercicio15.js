document.getElementById('btnProcesar').addEventListener('click', function() {
    let texto = document.getElementById('datosInput').value;

    if (texto.trim() === '') {
        alert('Ingresa los datos de los estudiantes.');
        return;
    }

    let lineas = texto.trim().split('\n');
    let estudiantes = [];

    for (let i = 0; i < lineas.length; i++) {
        let partes = lineas[i].split(',');
        if (partes.length === 2) {
            let nombre = partes[0].trim();
            let calificacion = parseFloat(partes[1].trim());

            if (nombre !== '' && !isNaN(calificacion)) {
                estudiantes.push({
                    nombre: nombre,
                    calificacion: calificacion
                });
            }
        }
    }

    if (estudiantes.length === 0) {
        alert('Formato incorrecto. Asegurarse de ingresar "Nombre, Calificación" cada uno.');
        return;
    }

    let suma = 0;
    let mejorEstudiante = estudiantes[0];
    let peorEstudiante = estudiantes[0];

    for (let i = 0; i < estudiantes.length; i++) {
        let actual = estudiantes[i];
        suma += actual.calificacion;

        if (actual.calificacion > mejorEstudiante.calificacion) {
            mejorEstudiante = actual;
        }

        if (actual.calificacion < peorEstudiante.calificacion) {
            peorEstudiante = actual;
        }
    }

    let promedio = suma / estudiantes.length;

    document.getElementById('promedio').value = promedio.toFixed(2);
    document.getElementById('estudianteMayor').value = mejorEstudiante.nombre + " (" + mejorEstudiante.calificacion + ")";
    document.getElementById('estudianteMenor').value = peorEstudiante.nombre + " (" + peorEstudiante.calificacion + ")";
});
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: Division por cero';

const calcularOperacion = (tipoOperacion) => {
    let input1 = document.getElementById('numero1').value.trim();
    let input2 = document.getElementById('numero2').value.trim();

    if (input1 === '' || input2 === '') {
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacios',
            text: 'Por favor, ingresa ambos numeros antes de realizar la operacion.',
            confirmButtonColor: '#0284c7'
        });
        return;
    }

    let n1 = parseFloat(input1);
    let n2 = parseFloat(input2);

    if (isNaN(n1) || isNaN(n2)) {
        Swal.fire({
            icon: 'warning',
            title: 'Entrada Invalida',
            text: 'Debes ingresar únicamente valores numericos validos.',
            confirmButtonColor: '#0284c7'
        });
        return;
    }

    let resultadoCalculado;

    switch (tipoOperacion) {
        case 'suma':
            resultadoCalculado = sumar(n1, n2);
            break;
        case 'resta':
            resultadoCalculado = restar(n1, n2);
            break;
        case 'multiplicacion':
            resultadoCalculado = multiplicar(n1, n2);
            break;
        case 'division':
            if (n2 === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Operacion Invalida',
                    text: 'No es posible dividir entre cero.',
                    confirmButtonColor: '#0284c7'
                });
                document.getElementById('resultado').value = 'Error: Division por cero';
                return;
            }
            resultadoCalculado = dividir(n1, n2);
            break;
    }

    document.getElementById('resultado').value = typeof resultadoCalculado === 'number' 
        ? Number.isInteger(resultadoCalculado) ? resultadoCalculado : resultadoCalculado.toFixed(4)
        : resultadoCalculado;
};
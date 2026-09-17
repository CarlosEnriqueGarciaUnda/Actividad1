const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

function agregarElemento() {
    const texto = input.value.trim();

    if (texto !== '') {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center bg-body-tertiary';

        const spanTexto = document.createElement('span');
        spanTexto.textContent = texto;

        const botonEliminar = document.createElement('button');
        botonEliminar.className = 'btn btn-danger btn-sm fw-bold';
        botonEliminar.textContent = 'Eliminar';
        
        botonEliminar.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(spanTexto);
        li.appendChild(botonEliminar);
        lista.appendChild(li);

        input.value = '';
    } else {
        alert('Por favor, escribe algo para agregar a la lista.');
    }
}

botonAgregar.addEventListener('click', agregarElemento);
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarElemento();
    }
});
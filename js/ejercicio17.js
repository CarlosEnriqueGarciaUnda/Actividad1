const crearGestorTareas = () => {
    const obtenerTareas = () => {
        let tareasJSON = localStorage.getItem('tareas');
        return tareasJSON ? JSON.parse(tareasJSON) : [];
    };

    const guardarTareas = (tareas) => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    };

    return {
        agregar: (textoTarea) => {
            let tareas = obtenerTareas();
            tareas.push(textoTarea);
            guardarTareas(tareas);
        },
        eliminar: (index) => {
            let tareas = obtenerTareas();
            tareas.splice(index, 1);
            guardarTareas(tareas);
        },
        listar: () => obtenerTareas()
    };
};

const gestor = crearGestorTareas();

const renderizarTareas = () => {
    let listaUL = document.getElementById('listaTareas');
    listaUL.innerHTML = '';
    let tareas = gestor.listar();

    tareas.forEach((tarea, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
            <span>${tarea}</span>
            <button class="btn-eliminar" onclick="confirmarEliminar(${index})">Eliminar</button>
        `;
        listaUL.appendChild(li);
    });
};

document.getElementById('btnAgregar').addEventListener('click', () => {
    let input = document.getElementById('nuevaTarea');
    let texto = input.value.trim();

    if (texto === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacio',
            text: 'Por favor, escribe una tarea.',
            confirmButtonColor: '#0284c7'
        });
        return;
    }

    gestor.agregar(texto);
    input.value = '';
    renderizarTareas();
});

const confirmarEliminar = (index) => {
    Swal.fire({
        title: 'Eliminar tarea?',
        text: 'Esta acción borra la tarea del Local Storage.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ef4444',
        cancelButtonColor: '#64748b',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            gestor.eliminar(index);
            renderizarTareas();
            Swal.fire({
                title: 'Eliminada',
                icon: 'success',
                timer: 1200,
                showConfirmButton: false
            });
        }
    });
};

renderizarTareas();
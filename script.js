function mostrarAlerta(event) {
    event.preventDefault();
    document.getElementById('alerta-mensaje').classList.remove('d-none');
    document.getElementById('formulario-contacto').reset();
}

function ocultarAlerta() {
    document.getElementById('alerta-mensaje').classList.add('d-none');
}
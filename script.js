function mostrarAlerta(event) {
    event.preventDefault();
    const alerta = document.getElementById('alerta-mensaje');
    alerta.classList.remove('d-none');
    alerta.setAttribute('tabindex', '-1');
    alerta.focus({ preventScroll: true });
    alerta.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function ocultarAlerta() {
    document.getElementById('alerta-mensaje').classList.add('d-none');
    document.getElementById('correo').focus({ preventScroll: true });
}

document.getElementById('formulario-contacto')?.addEventListener('input', () => {
    document.getElementById('alerta-mensaje').classList.add('d-none');
});

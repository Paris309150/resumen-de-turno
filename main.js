let eventosTurno = JSON.parse(localStorage.getItem('eventosTurno')) || [];
let resumenTotales = JSON.parse(localStorage.getItem('resumenTotales')) || {
    Admitidos: 0,
    Altas: 0,
    Traslados: 0,
    Policial: 0,
    Derivados: 0,
};

let pacientesComges = JSON.parse(localStorage.getItem('pacientesComges')) || [];

document.addEventListener('DOMContentLoaded', () => {
    renderEventos();
    renderPacientesComges();
    actualizarResumen();
});

// --- EVENTOS DEL TURNO ---
document.getElementById('eventoForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fecha = document.getElementById('fecha').value;
    const tipoEvento = document.getElementById('tipoEvento').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);

    eventosTurno.push({ fecha, tipoEvento, cantidad });
    resumenTotales[tipoEvento] += cantidad;

    guardarDatos();
    renderEventos();
    actualizarResumen();

    e.target.reset();
});

function eliminarEvento(index) {
    const evento = eventosTurno[index];
    resumenTotales[evento.tipoEvento] -= evento.cantidad;

    eventosTurno.splice(index, 1);
    guardarDatos();
    renderEventos();
    actualizarResumen();
}

function actualizarResumen() {
    document.getElementById('resumenTurno').textContent =
        `Total Admitidos: ${resumenTotales.Admitidos} | Altas: ${resumenTotales.Altas} | Traslados: ${resumenTotales.Traslados} | Policial: ${resumenTotales.Policial} | Derivados: ${resumenTotales.Derivados}`;
}

function renderEventos() {
    const tbody = document.getElementById('eventosTableBody');
    tbody.innerHTML = '';

    eventosTurno.forEach((evento, index) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${evento.fecha}</td>
            <td>${evento.tipoEvento}</td>
            <td>${evento.cantidad}</td>
            <td><button class="delete-btn" data-index="${index}">Eliminar</button></td>
        `;
    });

    tbody.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            eliminarEvento(index);
        });
    });
}

// --- PACIENTES COMGES ---
document.getElementById('comgesForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const rut = document.getElementById('rut').value;
    const dau = document.getElementById('dau').value;

    pacientesComges.push({ nombre, rut, dau });

    guardarDatos();
    renderPacientesComges();

    e.target.reset();
});

function renderPacientesComges() {
    const tbody = document.getElementById('pacientesComgesTableBody');
    tbody.innerHTML = '';

    pacientesComges.forEach((paciente, index) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${paciente.nombre}</td>
            <td>${paciente.rut}</td>
            <td>${paciente.dau}</td>
            <td><button class="delete-comges-btn" data-index="${index}">Eliminar</button></td>
        `;
    });

    tbody.querySelectorAll('.delete-comges-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            eliminarPacienteComges(index);
        });
    });
}

function eliminarPacienteComges(index) {
    pacientesComges.splice(index, 1);
    guardarDatos();
    renderPacientesComges();
}

// --- GUARDAR DATOS ---
function guardarDatos() {
    localStorage.setItem('eventosTurno', JSON.stringify(eventosTurno));
    localStorage.setItem('resumenTotales', JSON.stringify(resumenTotales));
    localStorage.setItem('pacientesComges', JSON.stringify(pacientesComges));
}

// --- DESCARGAR RESUMEN ---
document.getElementById('descargarResumenCompleto').addEventListener('click', function () {
    let texto = 'Resumen de Eventos del Turno:\n\n';
    texto += 'Fecha | Tipo | Cantidad\n';
    eventosTurno.forEach(evento => {
        texto += `${evento.fecha} | ${evento.tipoEvento} | ${evento.cantidad}\n`;
    });

    texto += `\nResumen Total:\n`;
    texto += `Admitidos: ${resumenTotales.Admitidos}\n`;
    texto += `Altas: ${resumenTotales.Altas}\n`;
    texto += `Traslados: ${resumenTotales.Traslados}\n`;
    texto += `Policial: ${resumenTotales.Policial}\n`;
    texto += `Derivados: ${resumenTotales.Derivados}\n`;

    texto += `\nPacientes COMGES 9.1:\n\nNombre | RUT | DAU\n`;
    pacientesComges.forEach(paciente => {
        texto += `${paciente.nombre} | ${paciente.rut} | ${paciente.dau}\n`;
    });

    const blob = new Blob([texto], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resumen_completo_turno.txt';
    link.click();
});

// --- ENVÍO DE CORREO (SIMULADO) ---
document.getElementById('enviarCorreo').addEventListener('click', function () {
    const correoDestino = document.getElementById('correoDestino').value;
    if (!correoDestino) {
        alert('Por favor, ingrese un correo electrónico.');
        return;
    }

    alert(`Simulación de envío de correo a: ${correoDestino}\n\nEl contenido del resumen completo será enviado como archivo adjunto.`);
});

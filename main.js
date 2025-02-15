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

    if (!fecha || !tipoEvento || isNaN(cantidad) || cantidad <= 0) {
        alert('Complete todos los campos correctamente.');
        return;
    }

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
            <td><button class="delete-btn" onclick="eliminarEvento(${index})">Eliminar</button></td>
        `;
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
            <td><button class="delete-btn" onclick="eliminarPacienteComges(${index})">Eliminar</button></td>
        `;
    });
}

function guardarDatos() {
    localStorage.setItem('eventosTurno', JSON.stringify(eventosTurno));
    localStorage.setItem('resumenTotales', JSON.stringify(resumenTotales));
    localStorage.setItem('pacientesComges', JSON.stringify(pacientesComges));
}

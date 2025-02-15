Perfecto, el nombre del proyecto será **RegistroSAR360**.

Aquí tienes el **README.md** actualizado con ese nombre:

---

# 🏥 RegistroSAR360

Este proyecto permite registrar y analizar los eventos y situaciones relevantes durante los turnos en un **Servicio de Atención Primaria de Urgencia de Alta Resolutividad (SAR)**. Está diseñado para facilitar el control de pacientes admitidos, altas, traslados, procedimientos policiales, derivaciones, y además registrar pacientes sospechosos **COMGES 9.1**.

La herramienta busca mejorar la eficiencia en la gestión de los turnos y brindar un resumen detallado de las situaciones ocurridas durante el turno.

## 🚀 Características Principales

- ✅ **Registro interactivo:** Permite ingresar eventos como admitidos, traslados, procedimientos policiales, entre otros.
- 🧮 **Sumatoria automática de eventos:** Calcula y actualiza en tiempo real el total de admitidos, traslados, altas, etc.
- 🏷️ **Registro COMGES 9.1:** Permite registrar pacientes sospechosos con sus datos personales (**Nombre, RUT y DAU**).
- 💾 **Persistencia de datos:** Los registros se guardan automáticamente en el navegador mediante **localStorage**, permitiendo que la información se conserve incluso al cerrar la página.
- 🗑️ **Eliminación y limpieza de registros:** Botones para eliminar registros individuales o limpiar toda la tabla de eventos y pacientes COMGES.
- 📄 **Exportar resumen en formato `.txt`:** Permite descargar los registros del turno con un resumen detallado.
- 📧 **Ingreso de correo para envío de resumen:** *(Próxima implementación)*.

## 🛠️ Tecnologías Utilizadas

- **HTML5 & CSS3:** Estructura y estilos de la aplicación.
- **JavaScript (DOM & localStorage):** Manipulación dinámica de datos, almacenamiento local y generación de resúmenes automáticos.

## 📁 Estructura del Proyecto

```
/RegistroSAR360
│── index.html         # Página principal con formularios y tablas
│── styles.css         # Estilos para la interfaz
│── main.js            # Lógica de interacción con el usuario
│── README.md          # Documentación del proyecto
```

## 📝 Flujo de Registro

### 1️⃣ **Registro de Eventos**
- Seleccionar la **fecha del turno** *(se mantiene una vez seleccionada)*.
- Elegir el **tipo de evento** (Admitidos, Altas, Traslados, Policial, Derivados).
- Indicar la **cantidad** correspondiente.
- Presionar **Agregar Evento**.
- Los eventos se visualizarán en la tabla y se sumarán automáticamente a los totales.

### 2️⃣ **Registro COMGES 9.1**
- Completar los campos: **Nombre, RUT y DAU**.
- Presionar **Registrar Paciente COMGES**.
- El paciente se añadirá a la tabla de **Pacientes COMGES 9.1 Registrados**.

### 3️⃣ **Visualización y Resumen**
- Los eventos y pacientes se muestran en tablas.
- El resumen total de admitidos, altas, traslados, etc., se actualiza automáticamente.
- Los registros se guardan automáticamente en el navegador mediante **localStorage**.

### 4️⃣ **Exportar y Limpiar**
- Botón **Descargar Resumen:** Genera un archivo `.txt` con el detalle del turno.
- Botón **Limpiar Eventos:** Borra todos los registros de eventos.
- Botón **Limpiar COMGES:** Borra todos los pacientes **COMGES 9.1**.

## 💻 Cómo Usar el Proyecto

### 1. Clonar el repositorio:
```bash
git clone https://github.com/tu_usuario/RegistroSAR360.git
```

### 2. Abrir el archivo `index.html` en tu navegador.

## 📤 Funcionalidad Próxima: Envío por Correo

Se añadirá una función para enviar por correo el resumen de eventos y pacientes COMGES directamente desde la aplicación.

## 🤝 Contribuciones

¡Toda mejora es bienvenida! Si deseas contribuir, puedes abrir un **Pull Request** o reportar un **Issue**.

## 📧 Contacto

- Autor: Matías Bustos - **Zipper**
- Correo: [Tu correo aquí]

## 📝 Licencia

Este proyecto se distribuye bajo la licencia **MIT**.

---

¿Te gustaría que te ayude con el mensaje de commit para actualizar este README en **GitHub**?

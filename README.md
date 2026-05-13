# ☕ Reto 02 - FrontEnd: Sistema de Cafetería Asíncrona

Este proyecto simula el flujo de trabajo de una cafetería utilizando **JavaScript Asíncrono**. Se enfoca en el dominio de **Promesas**, el uso de `setTimeout` para controlar tiempos de respuesta y la implementación de `async/await` para la orquestación de procesos.

---

## 🚀 Funcionalidades

* **Validación de Menú:** El sistema verifica si el producto solicitado está disponible en la lista oficial.
* **Simulación de Tiempos:** Cada etapa del proceso (recepción y preparación) cuenta con un delay de **3 segundos**.
* **Manejo de Errores:** Se implementó una lógica de falla con un **20% de probabilidad** para simular desperfectos técnicos (máquina rota).
* **Flujo Moderno:** Uso de bloques `try/catch` para capturar excepciones de forma limpia.

---

## 🛠️ Estructura del Código

El sistema se divide en tres pilares fundamentales:

1.  `recibirPedido(producto)`: Valida el nombre del producto y retorna una promesa con el estado inicial.
2.  `prepararCafe(mensajePrevio)`: Procesa el mensaje anterior mediante `.split()` y gestiona la probabilidad de éxito de la preparación.
3.  `procesarPedido(producto)`: La función **async** principal que coordina la ejecución secuencial.

---

## 📋 Requisitos

* **Node.js** instalado (entorno de ejecución) o simplemente un navegador moderno (Chrome/Edge/Firefox).

## 💻 Cómo ejecutarlo

1. **Descargar el archivo:** Asegurate de tener el archivo `reto02.js` en tu carpeta local.
2. **Abrir la terminal:** Navegá hasta la ubicación del archivo.
3. **Ejecutar el comando:**
   ```bash
   node reto02.js

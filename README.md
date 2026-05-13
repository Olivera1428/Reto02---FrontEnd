##Reto02 - FrontEnd
Este proyecto simula el flujo de trabajo de una cafetería utilizando JavaScript Asíncrono. Se enfoca en el uso de Promesas, setTimeout para simular tiempos de espera y la sintaxis async/await para orquestar el proceso.

Funcionalidades
Validación de Menú: El sistema verifica si el producto solicitado está disponible.

Simulación de Tiempos: Cada paso (recibir y preparar) demora 3 segundos.

Manejo de Errores: Incluye una probabilidad del 20% de que la máquina de café falle.

Flujo Moderno: Utiliza try/catch y async/await para un código limpio y legible.

Requisitos
Node.js instalado (recomendado) o un navegador moderno.

Cómo ejecutarlo
Descarga el archivo: Asegurate de tener el archivo .js en tu computadora.

Abrir la terminal: Navegá hasta la carpeta donde guardaste el archivo.

Ejecutar con Node.js:

Bash
node reto02.js
Ver resultados: Observá la consola. El proceso completo de un pedido exitoso tarda aproximadamente 6 segundos.

Estructura del Código
recibirPedido(producto): Valida el producto contra el menú disponible.

prepararCafe(mensajePrevio): Extrae el nombre del producto y simula la preparación con riesgo de falla técnica.

procesarPedido(producto): Función principal que conecta ambos pasos de forma secuencial.

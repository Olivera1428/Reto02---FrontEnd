const menu = ["espresso", "cappuccino", "latte", "americano"];

const recibirPedido = (producto) => {
  return new Promise((resolve, reject) => {
    console.log("Procesando Pedido...");
    setTimeout(() => {
      if (menu.includes(producto.toLowerCase())) {
        resolve(`Pedido recibido: ${producto}`);
      } else {
        reject(`No tenemos ${producto} en el menú`);
      }
    }, 3000);
  });
};

function prepararCafe(mensajePrevio) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = mensajePrevio.split(" ").pop();
      const falla = Math.random() < 0.2;
      if (falla) {
        reject("La máquina está rota, no se pudo preparar el café");
      } else {
        resolve(`☕ Café listo: ${producto}`);
      }
    }, 3000);
  });
}
const procesarPedido = async (producto) => {
  try {
    const resultado1 = await recibirPedido(producto);
    console.log(resultado1);
    const resultado2 = await prepararCafe(resultado1);
    console.log(`✅ Entregado: ${resultado2}`);
  } catch (error) {
    console.log(`❌ Error: ${error}`);
  }
};

procesarPedido("espresso");

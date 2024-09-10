/* Escribe una función que tome un arreglo de objetos JSON que representan productos, y
devuelva la suma de los precios de los productos y la suma total del valor del stock de la
tienda. Utiliza la función reduce y el spread operator para obtener los precios de cada
objeto y sumarlos. */

let inventario = [
  { id_product: 1, nombre: 'Camiseta', precio: 50000, stock: 89 },
  { id_product: 2, nombre: 'Pantalón', precio: 90000, stock: 44 },
  { id_product: 3, nombre: 'Chaqueta', precio: 160000, stock: 23 },
  { id_product: 4, nombre: 'Correa', precio: 80000, stock: 104 },
];

function Totales(inventario) {

  const { valorTotal, TotalStock } = inventario.reduce(
    (acum, product) => ({
      valorTotal: acum.valorTotal + product.precio,
      TotalStock: acum.TotalStock + (product.precio * product.stock)
    }),
    { valorTotal: 0, TotalStock: 0 }
  );
  return { valorTotal, TotalStock };

}

let result = Totales([...inventario]);
console.log(`La Suma de los precios de los productos es de: ${result.valorTotal}`);
console.log(`El total de los productos en Stock es de: ${result.TotalStock}`);


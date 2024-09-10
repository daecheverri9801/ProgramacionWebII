/* Escribe una función que tome un arreglo de objetos JSON que representan productos, y
devuelva un objeto que contenga la suma de los precios de los productos, la cantidad
total de productos, y el nombre del producto más caro. Utiliza el spread operator, la
función reduce, map y sort para calcular los valores necesarios. */

let inventario = [
    { id_product: 1, nombre: 'Camiseta', precio: 50000, stock: 89 },
    { id_product: 2, nombre: 'Pantalón', precio: 90000, stock: 44 },
    { id_product: 3, nombre: 'Chaqueta', precio: 160000, stock: 23 },
    { id_product: 4, nombre: 'Correa', precio: 80000, stock: 104 },
];

function calculo(inventario) {
    const { sumaPrecios, stockTotal } = inventario.reduce(
        (acum, producto) => ({
            sumaPrecios: acum.sumaPrecios + producto.precio,
            stockTotal: acum.stockTotal + 1,
        }),
        { sumaPrecios: 0, stockTotal: 0 }
    );

    const PMasCaro = inventario.sort((a, b) => b.precio - a.precio)[0].nombre;
    return {sumaPrecios, stockTotal, PMasCaro};
}

let result = calculo([...inventario]);

console.log(`La Suma de Los precios de los productos es de: ${result.sumaPrecios}`);
console.log(`La Cantidad total de productos en stock es de: ${result.stockTotal}`);
console.log(`El Producto más caro en Stock es: ${result.PMasCaro}`);
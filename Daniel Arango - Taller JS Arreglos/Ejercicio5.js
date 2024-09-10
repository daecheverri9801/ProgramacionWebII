/* Dado un arreglo de objetos JSON que representan productos, escribe una función que
devuelva un nuevo arreglo que contenga solo los productos que tengan un precio mayor
a $80000 y una cantidad inferior a 100, luego a cada producto se debe agregar una
nueva propiedad "product_tax_value" que represente el precio con el impuesto del 19% 
y una propiedad “product_total_value” de valor más el impuesto calculado. Utiliza el
spread operator, la función map y filter. */

let inventario = [
    { id_product: 1, nombre: 'Camiseta', precio: 50000, stock: 89 },
    { id_product: 2, nombre: 'Pantalón', precio: 90000, stock: 44 },
    { id_product: 3, nombre: 'Chaqueta', precio: 160000, stock: 23 },
    { id_product: 4, nombre: 'Correa', precio: 80000, stock: 104 },
];

function PrizeMay(inventario) {
    return inventario.filter(product => product.precio > 80000 && product.stock < 100).map(product => {
        let product_tax_value = product.precio * 0.19;
        let product_total_value = product.precio + product_tax_value;
        return {...product, product_tax_value, product_total_value};
    });
}

let result = PrizeMay([...inventario]);

console.log(result);
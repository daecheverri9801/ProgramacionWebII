/* Dado un arreglo de objetos JSON que representan usuarios, escribe una función que
devuelva un nuevo arreglo que contenga solo los usuarios mayores de edad (18 años o
más), y para cada usuario se agregue una nueva propiedad "age_in_days" que
represente la edad del usuario en días. Utiliza el spread operator, la función map y filter. */

let users = [
    { name: "Carlos", age: 20 },
    { name: "Juana", age: 17 },
    { name: "Oliver", age: 25 },
    { name: "Katherine", age: 30 },
];

function OlderUsers(users) {
    return users.filter(usuario => usuario.age >= 18).map(usuario =>
    ({
        ...usuario, age_in_days: usuario.age * 365
    }));
}

let result = OlderUsers([...users]);

console.log(result);
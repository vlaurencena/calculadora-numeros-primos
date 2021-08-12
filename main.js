let numero = parseInt(prompt("Bienvenid@, ingresa un número entero positivo para saber si es primo."));

let esPrimo = true;

if (numero === 1) {
    alert(numero + " no es un número primo, ya que sólo tiene un divisor.");
} else if (numero > 0) {

    for (let i = 2; i < numero; i++) {

        if (numero % i === 0) {
            esPrimo = false;
            console.log(numero + " también es divisible por " + i + ".");
        } else {
            //NO HACER NADA   
        }
    }

    if (esPrimo) {
        alert(numero + " es un número primo, ya que sólo tiene dos divisores: es divisible por 1 y por sí mismo.");
    } else {
        alert(numero + " no es un número primo. Mirá la consola para saber por qué.");
    }

} else {
    alert("No has ingresado un número entero mayor que 0. Refresca la página y prueba con otra vez.");
}
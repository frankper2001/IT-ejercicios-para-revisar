/* 
console.log("E1:");
console.log('Hola mundo');

alert('E2: !Hola, me llamo frank!');

console.log("E3:");
let nombre = 'francisco';
let apellido = 'perez';
console.log(nombre + ' ' + apellido);

console.log("E4:");
let num1 = 25;
let num2 = 60;
console.log(
	'La suma entre ' + num1 + ' y ' + num2 + ' es ' + (num1 + num2)
);

let nota_examen = 4.6;
if (nota_examen >= 5) {
	alert('E5: Has aprobado el examen con ' + nota_examen);
} else {
	alert('E5: Has suspendido el examen con ' + nota_examen);
}
console.log("E6:");
let oracion1 = 'tengo un coche de color verde';
console.log(oracion1);
let oracion2 = oracion1.replace('verde', 'azul');
console.log(oracion2);
let oracion3 = oracion1.replace(/o/g, 'u');
console.log(oracion3);

let lista1 = ['mesa', 'silla', 'ordenador', 'libreta'];
console.log('E7:');
for (let index = 0; index < lista1.length; index++) {
	const element = lista1[index];
	console.log('El objeto ' + element + ' está en la posición ' + index + '.');
} 

function calculadora(operador, valor1, valor2) {
	let resultado = 0;
	if (operador == 'sumar') {
		return valor1 + valor2;
	} else if (operador == 'restar') {
		return valor1 - valor2;
	} else if (operador == 'multiplicar') {
		return valor1 * valor2;
	} else {
		return 'Los parametros no son correctos';
	}
}
console.log("E8:");
resultado = calculadora('sumar', 4, 7);
console.log(resultado);

function calculadora(operador, valor1, valor2) {
	let resultado = 0;
	if (operador == 'sumar') {
		return valor1 + valor2;
	} else if (operador == 'restar') {
		return valor1 - valor2;
	} else if (operador == 'multiplicar') {
		return valor1 * valor2;
	} else if (operador == 'dividir') {
		if (valor2 === 0) {
			return 'Error, no es posible dividir entre 0';
		} else {
			return valor1 / valor2;
		}
	} else {
		return 'Los parametros no son correctos';
	}
}
console.log("N2:");
resultado = calculadora('dividir', 4, 0);
console.log(resultado);
*/

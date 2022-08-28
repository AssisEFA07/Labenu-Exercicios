// function olaMundo(){
//     console.log("Olá mundo!");
// }

// olaMundo();

// function olaPessoa (nome){
//     console.log(`Olá ${nome}`);
// }

// olaPessoa("Emerson");
// olaPessoa("Ana");
// olaPessoa("Mariana");

let array = [2,3,4,5,6,7,8,9,10];
let array1 = [7,8,9,10,11,33,22]; 
function analisarArray(array){
    let arrayParcial = [];
    const primeiro = array[0];
    const ultimo = array[array.length - 1];
    arrayParcial.push(primeiro/2, ultimo/2);
      return arrayParcial
}

const resultado = analisarArray(array);
const resultado1 = analisarArray(array1);

console.log(resultado);
console.log(resultado1); 


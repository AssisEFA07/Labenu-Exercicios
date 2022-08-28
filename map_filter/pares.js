const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,22,33,44,55,66,77,88,99,100];

function retornaPares (arrayDeNumeros) {
    const arrayPares = [];
    for (let numero of arrayDeNumeros) {
      if (numero % 2 === 0) {
        arrayPares.push(numero);
      }
    }
        return arrayPares;
  }
  
  //console.log('PARES da lista informada : ', retornaPares(listaDeNumeros)); 

function imprimeNumeros (arrayDeNumeros, callback) {
  const response = callback(arrayDeNumeros);
  console.log('Imprime números / com callback', response)
}

//imprimeNumeros(listaDeNumeros, retornaPares);


// MAP
const multiplicaPorTresComMap = listaDeNumeros.map((numero, indice, array) => {
    return numero * 3
  })
   console.log('MAP : ', multiplicaPorTresComMap);

  // FILTER
  const retornaParesComFilter = listaDeNumeros.filter((numero, indice, array) => { // indice e array não são usados nesse exemplo, mas podem ser úteis em outras situações
    return numero % 2 === 0; 
  })
  
 console.log('FILTER :', retornaParesComFilter);
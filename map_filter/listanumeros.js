//const listaDeNumeros = [1,2,3,4,5,6,7,8,9,10];

// const multiplicaPor3 = (arrayDeNumeros)=> {
//   const arraymultiplicado = [];
//   for (let numero of arrayDeNumeros) {
//     arraymultiplicado.push(numero*3); 
//   }
//   return arraymultiplicado;
// }

//console.log(multiplicaPor3(listaDeNumeros)); 


// const multiplicaPorTres = (arrayDeNumeros) => {
    //   const arrayMultiplicado = [];
    
    //   for (let numero of arrayDeNumeros) {
        //     arrayMultiplicado.push(numero * 3)
        //   }
        //   return arrayMultiplicado
        // }
        // //console.log('TRIPLO', multiplicaPorTres(listaDeNumeros))
        
        // function imprimeNumerosCallback(arrayDeNumeros, callback){
            //     let response = callback(arrayDeNumeros);
            //     return response; 
            // }
            
            // console.log("Com callback : ", imprimeNumerosCallback(listaDeNumeros,multiplicaPorTres));

const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,22,33,44,55,66,77,88,99,100];

//MAP - faz uma operação sobre os elementos do array e devolve um novo array. automatico. 

const triploComMap = listaDeNumeros.map((numero,indice,array) =>{
    return numero*3;
});

console.log("TRIPLO COM MAP : ", triploComMap); 

//FILTER - faz um filtro nos elementos do array. Devolve aqueles que possuem a propriedade indicada. 

const paresComFilter = listaDeNumeros.filter((numero, indice, array)=>{
    return numero % 2 === 0 ;
}); 

console.log("Pares com Filter : ",paresComFilter);
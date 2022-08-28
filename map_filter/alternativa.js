const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}


// // Crie duas funcões que recebem como parâmetro um objeto.
// //1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
function caixaAlta(obj) {
   let myObj = {...obj};
    
    for (let key in obj) {  //key é o índice da chave e, no caso de objetos, a própria chave!
        myObj[key] = obj[key].toUpperCase(); //não itera sobre si mesmo! pega o valor do objeto original e modifica, atualizando o objeto cópia!
    }

    return myObj; 
}
    
    
 console.log("Caixa Alta : ", caixaAlta(objeto)); 

//2. A segunda deve retornar os valores do objeto como texto corrido.

function textoCorrido (obj){
    let textoCorrido = ""; 
    for (key in obj) {
        textoCorrido = textoCorrido + " " + obj[key]; 
    }
    return textoCorrido; 
}

console.log("Texto Corrido : ",textoCorrido(objeto)); 

//3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.
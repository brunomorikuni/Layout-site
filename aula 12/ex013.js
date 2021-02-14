var idade = 25
console.log(`sua idade ${idade} em anos `)
if(idade < 16){
    console.log("não vota")
}else {
    if(idade < 18 || idade >= 65 ){
        console.log("voto é opcional")  
    }else{
        console.log("voto obrigatório")  
    }

}

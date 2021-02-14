var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var data = agora.getDay()
var segundos = agora.getSeconds()
console.log(`Hoje é dia ${data} e agora são ${hora} horas e ${minuto} minutos e ${segundos} segundos`)
if(hora <=12){
    console.log("Bom dia!")
}else if (hora > 12){
    console.log("Boa tarde !")
}else{
    console.log("Boa noite!")
}
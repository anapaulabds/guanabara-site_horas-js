function carregar() {
var msg = document.querySelector('#msg') //puxa mensagem da foto
var img = document.querySelector('#imagem') //puxa imagem
var data = new Date() //data atual
var hora = data.getHours() //hora atual
var hora = 20
msg.innerHTML = `São ${hora} horas`
if (hora>=6 && hora<12) {
    img.src = "imagens/manha.png" //+= não funciona aqui
    msg.innerHTML += `<p>Bom dia!</p>`
    document.body.style.background = `#AF9A03`
} else if (hora>=12 && hora<18) {
    img.src = "imagens/tarde.png"
    msg.innerHTML += `<p>Boa tarde!</p>`
    document.body.style.background = `#618295`
} else if (hora>=19 && hora<=23) {
    img.src = 'imagens/noite.png' 
    msg.innerHTML += `<p>Boa noite!</p>`
    document.body.style.background = `#66544F`
}
else {
    img.src = 'imagens/madrugada.png'
    msg.innerHTML += `<p>Portanto, madrugada e você deveria estar dormindo!</p>`
    document.body.style.background = `#2C3C49`
}

}

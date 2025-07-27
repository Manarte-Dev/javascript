function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
   //* var hora = data.getHours()
   var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora <12){
        img.src='imagens/manha.jpg'
        document.body.style.background= 'rgba(216, 216, 216, 0.57)'
} else if (hora >=12 && hora<18){
    img.src='imagens/tarde.jpg'
    document.body.style.background= 'rgba(212, 210, 51, 0.84)'
} else {
    img.src='imagens/noite.jpg'
    document.body.style.background= 'rgba(14, 13, 13, 0.78)'
}
}
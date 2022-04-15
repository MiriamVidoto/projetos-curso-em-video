function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('image');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'images/manha.png'
        document.body.style.background = '#A5D4DE';
        document.getElementById('msg2').innerText = "Bom dia!";
    }else if (hora >= 12 && hora<18){
        img.src = 'images/tarde.png';
        document.body.style.background = '#FCBE2E';
        document.getElementById('msg2').innerText = "Boa tarde!";
    }else{
        img.src = 'images/noite.png'
        document.body.style.background = '#223272';
        document.getElementById('msg2').innerText = "Boa noite!";
    }
}
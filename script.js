function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (formAno.value.length == 0 || Number(formAno.value) > ano){//primeira validacao
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(formAno.value);
        var genero = '';
        var img = document.createElement('img');// cria imagem de forma dinamica
        img.setAttribute('id', 'foto');// cria atributo, serve para id, class, src...
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >=0 && idade <=5) {
                img.setAttribute('src', 'images/bebe-menino.png')
            } else if (idade <= 12){
                img.setAttribute('src', 'images/crianca-menino.png')
            } else if (idade <= 21){
                img.setAttribute('src', 'images/jovem-homem.png')
            } else if (idade<= 55){
                img.setAttribute('src', 'images/adulto-homem.png')
            }else{
                img.setAttribute('src', 'images/idoso-homem.png')
            }
        }else if (fsex [1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <=5) {
                img.setAttribute('src', 'images/bebe-menina.png')
            } else if (idade <= 12){
                img.setAttribute('src', 'images/crianca-menina.png')
            } else if (idade <= 21){
                img.setAttribute('src', 'images/jovem-mulher.png')
            } else if (idade<= 55){
                img.setAttribute('src', 'images/adulta-mulher.png')
            }else{
                img.setAttribute('src', 'images/idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        image.appendChild(img);
        image.style.margin('auto');

    }
}

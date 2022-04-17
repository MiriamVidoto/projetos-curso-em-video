let num = document.querySelector('input#numero'); 
let lista = document.querySelector('input#array');
let resultado = document.getElementById('resultado');
let valores = [];

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
       return true;
    } else{
        return false;
    }
}
function inList(n ,l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    } 
}
function adicionar() {
    //   if (isNumber(num.value) && !inList(num.value, valores)){
    //     valores.push(Number(num.value));
    //     let item =document.createElement('option');
    //     item.text = `valor ${num.value} adicionado.`;
    //     lista.appendChild(item);
    //  } else{
    //     alert('Valor invàlido ou ja encontrado na lista!')
    // }
    num.value="";
    num.focus;
}
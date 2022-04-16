function gerarTabuada(){
    let numeroEscolhido = document.getElementById('numero');
    let tab = document.getElementById('seltab')
    if (numeroEscolhido.value.length == 0) {
        alert('Por favor digite um número!')        
    } else{
        let num = Number(numeroEscolhido)
        for(let c = 1; c <= 10; c += 1){
        let res = (num * c);
        return res
    }
    }
    
}

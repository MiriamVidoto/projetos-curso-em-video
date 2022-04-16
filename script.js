function contar() {
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo'); 
    var res = document.getElementById('res');
       if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
       alert('[ERRO] Faltam Dados!')
    }else{
        res.innerHTML ='Contando:<br>';
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);
        if (p <= 0) {
            alert ('Passo inválido! Considerando PASSO 1');
            p = 1       
        }
        if (i < f) {
            for (let cont = i; cont <= f; cont += p) {
                res.innerHTML += `${cont} \u{1f449} `; 
            }          
        } else{
                for(let cont = i; cont >= f; cont -= p){
                    res.innerHTML += `${cont} \u{1f449} `;
                }
        }
        }
        res.innerHTML += `\u{1f3c1}`                 
}

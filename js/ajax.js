function fazRequisicaoAjax(metodo, url, dados = null){
    let xhr = new XMLHttpRequest();
    xhr.open(metodo,url); xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(dados));
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 ){
            if( !(xhr.status === 200 || xhr.status === 304) ){
                console.log('Erro do cliente '+xhr.statusText);
            }
            if(xhr.status === 200 || xhr.status === 304){
                let resposta = JSON.parse(xhr.responseText);
                console.log(resposta);
            }
        }           
    }
}


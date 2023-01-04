let menu = fazRequisicaoAjax("GET", "https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json", null);
console.log(cardapio.resposta);
if(cardapio!=null)
    montaSite(cardapio);

function cbErroReq(msg){
    document.querySelector('#msgErro').textContent = msg;
    return;
}
function montaSite(){
    let body = document.getElementsByTagName("body")[0];
        for(item of cardapio){
            body.appendChild(montaDiv(item));
        }
}

function montaDiv(item){
    let divItem = document.createElement("div");
    divItem.classList.add("item");
    let name = document.createElement("h3");
    if (item.name != null){
        let nameText = document.createTextNode(item.name);
        name.appendChild(nameText);
        divItem.appendChild(name);
    }
    else{
        let nameText = document.createTextNode(item.title);
        name.appendChild(nameText);
        divItem.appendChild(name);
    }
    let image = document.createElement("img");
    var xhttp = new XMLHttpRequest();
    
xhttp.onreadystatechange = function() {
console.log("oi");
if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML = xhttp.responseText;
}
    image.src = item.photo;
    divItem.appendChild(image);
};
}

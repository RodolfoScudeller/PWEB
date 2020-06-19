function Validacao() {
    
    var nome = document.forms["form"]["nome"].value;
    var email = document.forms["form"]["email"].value;
    var comentario = document.forms["form"]["comentario"].value;
    var radio1 = document.forms["form"]["r1"].value;
    var radio1 = document.forms["form"]["r1"].value;
    
    if((nome.length) < 10 ){
        return alert("Por favor, digite um nome com mais de 10 caracteres!!!");
    }
    if ((email == "") && (nome == "")) {
       return alert("Por favor, digite o Nome e o E-mail!!!");
    }
    if (nome == "") {
       return alert("Por favor, digite o Nome!!!");
    }
    if (email == "") {
       return alert("Por favor, digite o E-mail!!!");
    }
    if(comentario.length < 20){
        return alert("Por favor, digite um comentario com mais de 20 caracteres!!!")
    }
    if(r1.checked){
        return alert("Volte Sempre!!!");
    }
    else{
        return alert("Que bom que voce voltou!!!");
    }
}
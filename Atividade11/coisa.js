function aviso(){
    if(confirm("Autoriza a abertura da pagina do curso selecionado??")){
        var pagina = document.getElementById('cursos').value;
        
        console.log(pagina);
        
        window.open("http://www.fatecsorocaba.edu.br/curso_" + pagina + ".asp");
    }
    
}
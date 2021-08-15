const fotoGrande = document.querySelector(".foto__grande img");

const miniaturas = document.querySelectorAll(".miniaturas img");

const texto = document.querySelector(".overlay a span");

console.log(texto)

miniaturas.forEach((item) =>{
    item.addEventListener("click", mudarFoto);
    
})

function mudarFoto(e){
   let imagem =  e.target.getAttribute("src");
   console.log(imagem)

   fotoGrande.setAttribute("src", `${imagem}`);
    
    if(e.target === miniaturas[0]){
        texto.innerHTML = "Todo mundo quer ser blogueiro";
    } else if(e.target === miniaturas[1]){
        texto.innerHTML = "A moda que a garotada gosta";
    } else if(e.target === miniaturas[2]){
        texto.innerHTML = "Parabéns pastel de flango";
    }

   
}

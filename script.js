const key= "3dae2f046577aa0e48779eb5e7ac4fe2" 

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML= " O tempo em " + dados.name + " é : "
    document.querySelector(".Temp").innerHTML=Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".texto-previsao").innerHTML=dados.weather[0].description
    document.querySelector(".umidade").innerHTML="Umidade está em: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
 
}

async function buscarCidade(cidade){
   
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then ( resposta=> resposta.json())

    colocarDadosNaTela(dados)

   

    //função onde faz a busca do local escolhido e faz uma busca no servidor de pesquisa climatica. assim trazendo o resultado e convertento para formato json e salvando na variavel dados..  
}

function CliqueiNoBotão() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade) 
}


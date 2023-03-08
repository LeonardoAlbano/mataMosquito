//variaveis global

var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500


var nivel = window.location.search
nivel = nivel.replace('?', ' ')

if (nivel === 'junior') {
     criaMosquitoTempo = 1500
     
} else if ('pleno') {
     criaMosquitoTempo = 1000
} else if ('senior') {
     criaMosquitoTempo = 750
}



function ajustaTamanhoPalcoJogo() {
     altura = window.innerHeight
     largura = window.innerWidth

     console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()


//CRONOMETRO

var cronometro = setInterval(function () {

     //innerHTML para insitir dentro da tag html nesse caso é a variavel (var)o tempo 
     tempo -= 1


     //fluxo de vitoria
     if (tempo < 0)  {
          //limpar funçao
          clearInterval(cronometro)
          clearInterval(criaMosquito)

          //Usuaroi vencer partida redirecionar para outra pagina 
          window.location.href = 'vitoria.html'
          
     } else {
          document.getElementById('cronometro').innerHTML = tempo
     }
}, 1000)

function posicaoRandomica() {   //Resposavel pela criação do elemnto HTML

     //remover o mosquito anterior (caso exista) 
     if (document.getElementById('mosquito')) {
          document.getElementById('mosquito').remove()

          //console.log ('elemento selecionado foi: v' + vidas)
          if (vidas > 3) {

               //rederecionar usuario para outra pagina (href significa a pagoina q esta sendo redenereizaADA NAQUELE MONTENDO )
               window.location.href = 'fim_de_jogo.html'
               
          } else {


          //Aqui recurso para afetar os pontos de vida 
          document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
     
          //incremento de mais uma variavel 
          vidas++

          }
     }
    


 // Posicionamento das imagens     
var posicaoX = Math.floor(Math.random () * largura) - 90
var posicaoY = Math.floor(Math.random () * altura) - 90 

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY


console.log(posicaoX, posicaoY)  


//criar elemento html5 // atributo
var mosquito = document.createElement ('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()  //concatenar um espaço        //compemento para o atribulo className do elemnto html (mosquito)
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'  //para nao ficar duplicandio sem para 


//Ação de remover o elemento 
mosquito.onclick = function() {
     this.remove()
    
}

document.body.appendChild(mosquito) 

      //Como uma função retorna a uma stringer

}
//math.random pega numero proximo de 1 ( 0.1 , 0.2 ...)
//math.floor arrendodando valor para baixo 
function tamanhoAleatorio() {

     var classe = Math.floor(Math.random() * 3)  // multiplcar por 3 , math.floor é para arrendondar para baixo 
     

     //tomada de decição
     switch (classe) {                  // case são as classes, não precisa usar comando braeak, pois java ja interronpe sem usar break
              case 0:
              return 'mosquito1'

              case 1:
              return 'mosquito2'

              case 2:
              return 'mosquito3'
     
          
     }
     
}


function ladoAleatorio() {

     var classe = Math.floor(Math.random() * 2)

     switch (classe) {                  // case são as classes, não precisa usar comando braeak, pois java ja interronpe sem usar break
          case 0:
          return 'ladoA'  //Stringer lado a

          case 1:
          return 'ladoB'  //Stringer lado B

      
 }

     
}
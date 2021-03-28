var numeroSecreto = parseInt(Math.floor(Math.random() * (12 - 2 + 1) + 2)) // random integer between 1 and 12
var result = document.getElementById('res')
var tentativas = 1
var botao = window.document.getElementById('botao')


function roll(numero) {


    while (tentativas <= 3) {
        var numero = prompt('Adivinhe o valor da soma dos dados (número inteiro entre 2 e 12)')

        if (numeroSecreto == numero) {
            result.innerHTML = `<p>Acertou! O valor da soma dos dados é ${numeroSecreto}!</p>`
            break
        }

        else if (numero == '' || numero == ' '){
            alert('Por favor preencha o campo com um número inteiro entre 2 e 12')

        }

        else if (numero <= 1 || numero > 12) {
            alert('Valor inválido. Digite um número entre 2 e 12.')
            tentativas ++

        }

        else if (numero < numeroSecreto) {
            alert('O valor da soma dos dados é maior!')
            tentativas ++

        }

        else if (numero > numeroSecreto) {
            alert('O valor da soma dos dados é menor!')
            tentativas ++
        }

    }
    
    var tryAgain = document.getElementById('botao')
    tryAgain.setAttribute('value', 'Tentar novamente')
    tryAgain.setAttribute('onClick', 'location.reload()')


      

 }
 

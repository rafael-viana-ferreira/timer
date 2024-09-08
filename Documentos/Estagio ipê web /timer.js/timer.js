// todos os nossos ids: 
sextozero = document.getElementById("primeiroZero"), botaoSegundos = document.getElementById("botao_inicio"), botaoParar = document.getElementById("botao_parar"), quintoZero = document.getElementById("segundoZero"), casa2 = document.getElementById("quintoZero"), casa1 = document.getElementById("sextoZero")
botaoZerar = document.getElementById("zerar"), botaoVoltar = document.getElementById("voltar")

casaZeroSeis = document.getElementById("casa6"), casaZeroCinco = document.getElementById("casa5"), casaZeroQuatro = document.getElementById("casa4")
casaZeroTres = document.getElementById("casa3"), casaZeroDois = document.getElementById("casa2"), casaZeroUm = document.getElementById("casa1")

// fim da declaração dos IDs


span1 = document.getElementById("primeiroZero").innerHTML, span2 = document.getElementById("segundoZero").innerHTML, span3 = document.getElementById("terceiroZero").innerHTML, span4 = document.getElementById("quartoZero").innerHTML
span5 = document.getElementById("quintoZero").innerHTML, span6 = document.getElementById("sextoZero").innerHTML
conversao(span1, span2, span3, span4, span5, span6)
function conversao(span1, span2, span3, span4, span5, span6) {
    valor1 = span1, valor2 = span2, valor3 = span3, valor4 = span4, valor5 = span5, valor6 = span6
    valor1 = Number(valor1), valor2 = Number(valor2), valor3 = Number(valor3), valor4 = Number(valor4), valor5 = Number(valor5), valor6 = Number(valor6);
}

zeroUm = document.getElementById("casa1").innerHTML, zeroDois = document.getElementById("casa2").innerHTML, zeroTres = document.getElementById("casa3").innerHTML
zeroQuatro = document.getElementById("casa4").innerHTML, zeroCinco = document.getElementById("casa5").innerHTML, zeroSeis = document.getElementById("casa6").innerHTML


conversaoCronometroVoltas(zeroUm, zeroDois, zeroTres, zeroQuatro, zeroCinco, zeroSeis)


function conversaoCronometroVoltas(zeroUm, zeroDois, zeroTres, zeroQuatro, zeroCinco, zeroSeis) {
    posicao1 = zeroUm, posicao2 = zeroDois, posicao3 = zeroTres, posicao4 = zeroQuatro, posicao5 = zeroCinco, posicao6 = zeroSeis
    posicao1 = Number(posicao1), posicao2 = Number(posicao2), posicao3 = Number(posicao3), posicao4 = Number(posicao4)
    posicao5 = Number(posicao5), posicao6 = Number(posicao6)
}



function timer() {
    // cronometro das voltas 
    exibirVoltas = document.getElementById("voltas_dadas")
    exibirVoltas.style.display = "flex"
    matarVolta1 = setInterval(function () {
        posicao6++

        casaZeroSeis.innerHTML = posicao6

        if (posicao6 == 10) {
            posicao5++
            casaZeroCinco.innerHTML = posicao5
            casaZeroSeis.innerHTML = posicao6 = 0
        }
        if (posicao5 == 10) {
            posicao4++
            casaZeroQuatro.innerHTML = posicao4
            casaZeroCinco.innerHTML = posicao5 = 0
            casaZeroSeis = posicao6 = 0
        }
        if (posicao4 == 10) {
            posicao3++
            casaZeroTres.innerHTML = posicao3
            casaZeroQuatro.innerHTML = posicao4 = 0
            casaZeroCinco.innerHTML = posicao5 = 0
            casaZeroSeis = posicao6 = 0
        }
        if (posicao3 == 10) {
            posicao2++
            casaZeroDois.innerHTML = posicao2
            casaZeroTres.innerHTML = posicao3 = 0
            casaZeroQuatro.innerHTML = posicao4 = 0
            casaZeroCinco.innerHTML = posicao5 = 0
            casaZeroSeis = posicao6 = 0
        }
        if (posicao1 == 10) {
            posicao1++
            casaZeroUm.innerHTML = posicao1
            casaZeroDois.innerHTML = posicao2 = 0
            casaZeroTres.innerHTML = posicao3 = 0
            casaZeroQuatro.innerHTML = posicao4 = 0
            casaZeroCinco.innerHTML = posicao5 = 0
            casaZeroSeis = posicao6 = 0
        }

    }, 1)


    // cronometro principal 
    para = setInterval(function () {
        valor1++


        botaoSegundos.style.display = "none"
        sextozero.innerHTML = valor1
        botaoParar.style.display = "flex"
        botaoVoltar.style.display = "flex"
        botaoZerar.style.display = "none"

        if (valor1 == 10) {
            valor2++
            quintoZero.innerHTML = valor2
            sextozero.innerHTML = valor1 = 0
        }
        if (valor2 == 10) {
            valor3++
            terceiroZero.innerHTML = valor3
            quintoZero.innerHTML = valor2 = 0
            sextozero.innerHTML = valor1 = 0
        }
        if (valor3 == 10) {
            valor4++
            quartoZero.innerHTML = valor4
            terceiroZero.innerHTML = valor3 = 0
            quintoZero.innerHTML = valor2 = 0
            sextozero.innerHTML = valor1 = 0
        }
        if (valor4 == 10) {
            valor5++
            casa2.innerHTML = valor5
            quartoZero.innerHTML = valor4 = 0
            terceiroZero.innerHTML = valor3 = 0
            quintoZero.innerHTML = valor2 = 0
            sextozero.innerHTML = valor1 = 0
        }
        if (valor5 == 10) {
            valor6++
            casa1.innerHTML = valor6
            casa2.innerHTML = valor5 = 0
            quartoZero.innerHTML = valor4 = 0
            terceiroZero.innerHTML = valor3 = 0
            quintoZero.innerHTML = valor2 = 0
            sextozero.innerHTML = valor1 = 0
        }



    }, 1);


}

function parar() {
    clearInterval(para)
    botaoSegundos.style.display = "flex"
    botaoParar.style.display = "none"
    botaoZerar.style.display = "flex"
    botaoVoltar.style.display = "none"


    clearInterval(matarVolta1)

}

function zerar() {

    representaçãoDeVoltas = 0
    representaçãoDeVoltaAtual = 1

    idrepresentaçãoDeVoltas.innerText = representaçãoDeVoltas
    VoltaAtual.innerText = representaçãoDeVoltaAtual


    primeiroZero.innerHTML = valor6 = 0
    casa2.innerHTML = valor5 = 0
    terceiroZero.innerHTML = valor4 = 0
    quartoZero.innerHTML = valor3 = 0
    quintoZero.innerHTML = valor2 = 0
    sextozero.innerHTML = valor1 = 0

    // estilo dos botões 
    botaoZerar.style.display = "none"
    botaoVoltar.style.display = "flex"
    exibirVoltas.style.display = "none"



    Voltas = []
    cronometro = []

    exibir.innerHTML = `${Voltas}  ${cronometro} `

}

// variavel global que diz qunatas voltas foram dadas usei variavel global já que irei usa-las em função 


Voltas = ["0"]
cronometro = ["0"]
representaçãoDeVoltas = 0
representaçãoDeVoltaAtual = 1
idrepresentaçãoDeVoltas = document.getElementById("definirVoltaAnterior")
VoltaAtual = document.getElementById("representanteDeVoltas")
function voltar() {

    posicao1 = 0, posicao2 = 0, posicao3 = 0, posicao4 = 0, posicao5 = 0, posicao6 = 0

    Voltas.shift()
    cronometro.shift()
    representaçãoDeVoltas++
    representaçãoDeVoltaAtual++
    idrepresentaçãoDeVoltas.innerText = representaçãoDeVoltas
    VoltaAtual.innerText = representaçãoDeVoltaAtual
    console.log(representaçãoDeVoltas)
    numeroVoltas = document.getElementById("valorVoltasAexibirNoHistorico").innerText
    conteudoVoltas = document.getElementById("conteudoVoltas").innerText
    Voltas.push(numeroVoltas)
    cronometro.push(conteudoVoltas)
    console.log(Voltas, cronometro)
    exibir = document.getElementById("receberElementosCriados")
    exibir.innerHTML += `<p style = " padding: 15px; display:flex; justify-content: space-between;">  <span>${Voltas}</span>    <span>${cronometro}</span></p>   <hr style = "  border: 1px solid rgb(23, 23, 23);"  >`
}
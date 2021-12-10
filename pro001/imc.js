
const calcular = document.getElementById('calcular')

function imc () {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if(nome.value !== '' && altura !== '' && peso !=='') {
        
        const valorIMC = (peso/(altura * altura)).toFixed(1)

        let classificação = ""

        if(valorIMC < 18.5){
           classificação = 'abaixo do peso.' 
        }else if (valorIMC < 25){
            classificação = 'Com o peso ideal. Parabéns!!!'
        }else if(valorIMC < 30){
            classificação = 'levemente acima do peso.'
        }else if (valorIMC < 35){
            classificação = 'Obesidade grau I.' 
        }else if (valorIMC < 40){
            classificação = 'Obesidade grau II.'
        } else {
            classificação ='Obesidade III. Cuidado!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificação}`

    }else {
        resultado.textContent = 'Preencha todos os campos!!!'    
    }

}

calcular.addEventListener('click', imc);
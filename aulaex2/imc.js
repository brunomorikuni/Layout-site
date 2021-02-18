const calcular = document.getElementById('calcular')


function imc () {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(3);

        resultado.textContent = valorIMC;

        let classificação = ''
        
        if(valorIMC < 18){
            classificação = ('abaixo do peso')
        }else if (valorIMC < 25){
            classificação = ('peso normal')
        }else if (valorIMC < 30){
            classificação = ('sobpeso')
        }else if (valorIMC < 35){
            classificação = ('obesidade tipo 1')
        }else if (valorIMC < 40){
            classificação = ('obesidade tipo 2')
        }else if (valorIMC >= 40){
            classificação = ('obeidade tipo 3 ou morbida')
        }
        resultado.textContent = `seu IMC é ${valorIMC} e sua classificação é ${classificação} `
    }else {
        resultado.textContent = 'Preencha todos os campos !!!!!'
    }
    



}

calcular.addEventListener('click' ,imc );


    
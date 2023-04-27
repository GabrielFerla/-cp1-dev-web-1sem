// alert("Seja bem Vindo")

function validateEmail() {
    const emailInput = document.getElementById('email');

    if (emailInput.value.trim() === '') {
        return false
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        return false
    } else {
        return true
    }
    
  }

function validateNome() {
    const nomeInput = document.getElementById('nome');
    
    if (nomeInput.value.trim() === '') {
        return false
    } else if (nomeInput.value.length < 3) {
        return false
    } else {
        return true
    }
}

function validatePhone(){
    const phoneInput = document.getElementById('phone');
    
    if (phoneInput.value.trim() === '') {
        return false
    }
    else if (phoneInput.value.length < 11) {
        return false
    }
    else {
        return true
    }
  
}

function validar(){
    if(validateEmail() == true && validateNome() == true && validatePhone() == true){
        alert("Formulario enviado com sucesso")
    }else{
        alert("Preencha os campos corretamente")
    }
}

function changeBackgroundColor(value) {
    
    const body = document.querySelector('body')
    body.style.backgroundColor = value
}

function iniciarQuiz(){
    var nome = prompt("Digite seu nome: ")
}


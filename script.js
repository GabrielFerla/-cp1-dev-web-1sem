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

    alert ("“vamos conhecer sobre vinho")
    var nome = prompt("Digite seu nome: ")
    var idade = prompt("Digite sua idade: ")
    var sexo = prompt("Digite seu sexo: ")

    var uva = prompt("Qual a uva da sua preferencia ?")
    var regiao = prompt("Qual a região de vinho da sua preferencia?")
    var tipo = prompt("Qual o tipo de vinho da sua preferencia?")
    var safra = prompt("Qual a safra do vinho da sua preferencia?")
    var preco = prompt("Qual o preço do vinho da sua preferencia?")
    var vinicola = prompt("Qual a vinicola do vinho da sua preferencia?")
    var pais = prompt("Qual o pais do vinho da sua preferencia?")

    //motrar na tela com alert

    alert("Nome: " + nome + "\n" + "Idade: " + idade + "\n" + "Sexo: " + sexo + "\n" + "Uva: " + uva + "\n" + "Região: " + regiao + "\n" + "Tipo: " + tipo + "\n" + "Safra: " + safra + "\n" + "Preço: " + preco + "\n" + "Vinicola: " + vinicola + "\n" + "Pais: " + pais)


    
}


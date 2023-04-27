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
function calc(){
    let num1 = Number(prompt("Digite o primeiro número"))
    let num2 = Number(prompt("Digite o segundo número"))
    let op =Number(prompt(`Escolha uma opção: ${num1} e ${num2} \n[1]-Somar  \n[2]-Subtrair \n[3]-Multiplicar \n[4]-Dividir`))

    let msg =document.getElementById('msg')

    msg.innerHTML += `<h2>Resultado</h2>`

    switch(op){
        case 1 :
            msg.innerHTML += `<p> ${num1}  +${num2} = <strong>${num1 + num2}</strong>`
            break
        case 2 :
            msg.innerHTML += `<p> ${num1}  -${num2} = <strong>${num1 - num2}</strong>`
            break;
        case 3 :
            msg.innerHTML += `<p> ${num1}  *${num2} = <strong>${num1 * num2}</strong>`
                break;
        case 4 :
             msg.innerHTML += `<p> ${num1}  /${num2} = <strong>${num1 / num2}</strong>`
                break;
                default:
                    msg.innerHTML += `<p>Opção Inválida</p>`
                break;
        
    }
}

function validar(){
    if(validateEmail() == true && validateNome() == true && validatePhone() == true){
        alert("Formulario enviado com sucesso")
    }else{
        alert("Preencha os campos corretamente")
    }
}


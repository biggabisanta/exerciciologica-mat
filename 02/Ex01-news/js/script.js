//alert('Olá benhêe')

var msg = document.querySelector('.mensagem');
//msg.textContent = 'Seu email foi cadastrado com sucesso!'

var botao = document.querySelector('.button');
botao.addEventListener('click', function(e) {
    e.preventDefault()
    var email = document.querySelector('#newsInputEmail')
    msg.textContent = 'O Email' + email.value +' foi cadastrado com sucesso!';


})
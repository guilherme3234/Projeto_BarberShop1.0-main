document.addEventListener('DOMContentLoaded', function() {
    // ADICIONA EVENTO PARA O FORMULÁRIO DE LOGIN
    document.getElementById('loginFormA').addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obter os valores dos campos de entrada
        const email = document.getElementById('loginEmail').value;
        const senha = document.getElementById('loginPassword').value;

        // Enviar uma solicitação POST para a API Flask com as credenciais de login
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, senha: senha})
        })
        .then(response => {
            if (response.ok) {
                // Se o login for bem-sucedido, redirecionar para a página homepage.html
                window.location.href = "./homepage.html";
            } else {
                // Se o login falhar, exibir mensagem de erro 
                return response.json().then(data => {
                    alert(data.error);
                });
            }
        })
        .catch(error => {
            console.error('Erro ao fazer login:', error);
        });
    });
});

// ----------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // ADICIONA EVENTO PARA O FORMULÁRIO DE CADASTRO
    document.getElementById('loginForm').addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obter os valores dos campos de entrada
        const email = document.getElementById('CadastroEmail').value.trim(); // Corrigido o ID e removido espaços em branco antes e depois
        const senha = document.getElementById('CadastroPassword').value.trim(); // Corrigido o ID e removido espaços em branco antes e depois

        // Validar se os campos não estão vazios
        if (email === '' || senha === '') {
            alert('Por favor, preencha todos os campos.');
            return; // Impede o envio do formulário se algum campo estiver vazio
        }

        // Enviar uma solicitação POST para a API Flask com as credenciais de cadastro
        fetch('/insert', { // Corrigido o nome do endpoint para corresponder à rota do Flask
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, senha: senha})
        })
        .then(response => {
            if (response.ok) {
                // Se o cadastro for bem-sucedido, redirecionar para a página de sucesso ou fazer outra ação
                alert('Cadastro realizado com sucesso!');
                window.location.href = "./";
            } else {
                // Se o cadastro falhar, exibir mensagem de erro
                return response.json().then(data => {
                    alert(data.error);
                });
            }
        })
        .catch(error => {
            console.error('Erro ao fazer cadastro:', error);
        });
    });
});

// ----------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um listener para o evento de envio do formulário
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário

        // Captura os valores dos campos do formulário
        var nome = document.getElementById("nome").value;
        var dia = document.getElementById("dia").value;
        var horario = document.getElementById("horario").value;

        // Cria uma mensagem com os valores capturados
        var mensagem = "Agendamento finalizado:\n";
        mensagem += "Nome do Cliente: " + nome + "\n";
        mensagem += "Dia: " + dia + "\n";
        mensagem += "Horário: " + horario;

        // Exibe a mensagem na tela
        alert(mensagem);

        // Opcionalmente, você pode exibir os valores em algum elemento HTML na página
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = "<p>" + mensagem.replace(/\n/g, "<br>") + "</p>";
    });
});
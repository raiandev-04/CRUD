// Dados fictícios de funcionários simulando um banco de dados
const funcionarios = [];

// Função para cadastrar o funcionário
function cadastrarFuncionario(event) {
    event.preventDefault();

    // Obter os valores inseridos pelo usuário
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    // Validar se o nome e a senha não estão vazios
    if (nome.trim() === "" || senha.trim() === "") {
        errorMessage.textContent = "Por favor, preencha todos os campos!";
        successMessage.textContent = "";
        return;
    }

    // Criar um novo funcionário e armazená-lo na "tabela" (array)
    const novoFuncionario = {
        id: funcionarios.length + 1,
        nome: nome,
        senha: senha
    };

    funcionarios.push(novoFuncionario);

    // Exibir mensagem de sucesso
    successMessage.textContent = "Cadastro realizado com sucesso!";
    errorMessage.textContent = "";

    // Limpar os campos do formulário
    document.getElementById("cadastroForm").reset();
}

// Adicionar evento de submit ao formulário
document.getElementById("cadastroForm").addEventListener("submit", cadastrarFuncionario);
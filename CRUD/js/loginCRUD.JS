document.addEventListener("DOMContentLoaded", function () {
    // Adiciona o evento de clique ao botão de login
    document.querySelector("button").addEventListener("click", function () {
        fazerLogin();
    });
});

function fazerLogin() {
    const usuario = document.querySelector("#usuario").value.trim();
    const senha = document.querySelector("#senha").value.trim();

    // Credenciais fixas para simular login
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    // Verifica se o usuário e senha são corretos
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        alert("Login realizado com sucesso!");
        localStorage.setItem("usuarioLogado", usuario);  // Armazena o usuário no localStorage
        window.location.href = "index.html";  // Redireciona para o CRUD de carros
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

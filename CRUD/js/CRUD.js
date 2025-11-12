
const carros = [];


document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#placa").addEventListener("input", function () {
        this.value = this.value.toUpperCase(); // Converte o input placa para maiúsculo
    });

    document.querySelector("#ano").addEventListener("input", function () {
        // Permite apenas números e limita a 4 caracteres
        this.value = this.value.replace(/\D/g, "").slice(0, 4);
    });
});

       function AdicionarCarro() {
           const placa = document.querySelector("#placa").value.trim();
           const marca = document.querySelector("#marca").value.trim();
           const modelo = document.querySelector("#modelo").value.trim();
           const ano = document.querySelector("#ano").value.trim();


           const carro = { placa, marca, modelo, ano };

           // Verifica se a placa já existe na lista
           const carroExistente = carros.find(carro => carro.placa === placa);
           if (carroExistente) {
               return alert("Este carro já foi cadastrado!");
           }

            // Verifica se a placa já existe
   if (carros.some(carro => carro.placa === placa)) {
       return alert("Este carro já foi cadastrado!");
   }

   // Verifica se a placa tem exatamente 7 caracteres e o ano tem 4 dígitos numéricos
   if (placa.length !== 7 || ano.length !== 4 || isNaN(ano)) {
       return alert("Placa deve ter 7 caracteres e o ano deve ter 4 números.");
   }


           if (!placa || !marca || !modelo || !ano) {
               return alert("Preencha todos os campos corretamente!");
           }
           if ((placa.length < 7) || (ano.length < 4)) {
               return alert("Você não digitou corretamente a placa ou o ano");
           }
           carros.push(carro);
           AtualizarCarro();

           // Limpar os campos após adicionar o carro
           document.querySelector("#placa").value = "";
           document.querySelector("#marca").value = "";
           document.querySelector("#modelo").value = "";
           document.querySelector("#ano").value = "";
       }

       function AtualizarCarro() {
           const listaDeCarros = document.querySelector("#listaDeCarros tbody");
           listaDeCarros.innerHTML = ""; // Limpa a lista antes de atualizar

           carros.forEach((carro, index) => {
               const CarroNovo = document.createElement("tr");
               CarroNovo.classList.add("carro-item");
               CarroNovo.innerHTML = `
           <td>${index + 1}</td>
           <td>${carro.placa}</td>
           <td>${carro.marca}</td>
           <td>${carro.modelo}</td>
           <td>${carro.ano}</td>
                 <div class="action-buttons">
                           <button class= "edit" onclick="AlterarCarro(${index})">
                               <i class="fas fa-edit"></i> 
                           </button>
                       </div>
                   </td>
                   <td>
                       <div class="action-buttons">
                           <button class="delete" onclick="RemoverCarro(${index})">
                               <i class="fas fa-times"></i> 
                           </button>
                       </div>
                   </td>
               `;
               listaDeCarros.appendChild(CarroNovo);
           });
       }

       function AlterarCarro(index) {
           const carro = carros[index];

           // Pega os valores dos inputs e altera
           document.querySelector("#placa").value = carro.placa;
           document.querySelector("#marca").value = carro.marca;
           document.querySelector("#modelo").value = carro.modelo;
           document.querySelector("#ano").value = carro.ano;

           // Remove o carro atual para ser atualizado ao clicar em adicionar novamente
           carros.splice(index, 1);
           AtualizarCarro();
       }

       function RemoverCarro(index) {
           const confirmacao = confirm("Tem certeza que deseja remover este carro?");
           if (confirmacao) {
               carros.splice(index, 1);
               AtualizarCarro();
               alert("Carro removido com sucesso!");
           }
       }

       function exibirAlerta(mensagem, tipo) {
        const alertContainer = document.getElementById("alert-container");
        
        // Criar o elemento de alerta
        const alertElement = document.createElement("div");
        alertElement.classList.add("alert");
        
        // Adiciona a classe correspondente ao tipo de alerta
        if (tipo === "sucesso") {
            alertElement.classList.add("alert-success");
        } else if (tipo === "erro") {
            alertElement.classList.add("alert-error");
        }
        
        alertElement.textContent = mensagem;
        
        // Adiciona o alerta ao container e exibe
        alertContainer.appendChild(alertElement);
        setTimeout(() => {
            alertElement.style.opacity = "1";
        }, 100); // Pequeno delay para transição suave
        
        // Remove o alerta após 3 segundos
        setTimeout(() => {
            alertElement.style.opacity = "0";
            setTimeout(() => alertElement.remove(), 500);
        }, 3000);
    }
    
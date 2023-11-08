document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("agendamento-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Aqui você pode adicionar código para validar e enviar os dados do formulário para o servidor.
    // Por enquanto, vamos apenas exibir uma mensagem de sucesso.
    alert("Agendamento realizado com sucesso!");
    form.reset(); // Limpa o formulário após o envio.
  });
});

emailjs.init({
  publicKey: "4IziTw0utF_mmM0fe"
});

const formulario = document.querySelector("#formContato");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoAssunto = document.querySelector("#assunto");
const campoMensagem = document.querySelector("#mensagem");
const mensagem = document.querySelector("#mensagemForm");

formulario.addEventListener("submit", enviarMensagem);

async function enviarMensagem(event) {
  event.preventDefault();

  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const assunto = campoAssunto.value;
  const texto = campoMensagem.value.trim();

  // validar campos obrigatórios
  if (nome == "" || email == "" || assunto == "" || texto == "") {
    mensagem.textContent = "Por favor, preencha todos os campos.";
    mensagem.className = "erro";
    return;
  }

  // validar tamanho do nome
  if (nome.length < 3) {
    mensagem.textContent = "O nome deve ter pelo menos 3 caracteres.";
    mensagem.className = "erro";
    return;
  }

  // valida e-mail
  if (!email.includes("@") || !email.includes(".")) {
    mensagem.textContent = "Digite um e-mail válido.";
    mensagem.className = "erro";
    return;
  }

  // valida tamanho da mensagem
  if (texto.length < 10) {
    mensagem.textContent = "A mensagem deve ter pelo menos 10 caracteres.";
    mensagem.className = "erro";
    return;
  }

  try {
    await emailjs.sendForm(
      "service_gmail",
      "template_74rgzhh",
      formulario
    );

    mensagem.textContent = "Mensagem enviada com sucesso!";
    mensagem.className = "sucesso";

    formulario.reset();

    console.log("Contato validado:", {
      nome,
      email,
      assunto,
      mensagem: texto,
    });

} catch (erro) {
    mensagem.textContent = "Erro ao enviar a mensagem. Tente novamente.";
    mensagem.className = "erro";

    console.error("Erro no envio:", erro);
}
}
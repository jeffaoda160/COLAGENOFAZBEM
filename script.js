// ====== BOTÃO VOLTAR AO TOPO ======
const topoBtn = document.getElementById("topo");
window.addEventListener("scroll", () => {
  topoBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
topoBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ====== FORMULÁRIO DE CONTATO ======
const form = document.getElementById("formContato");
const resposta = document.getElementById("resposta");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  if (nome) {
    resposta.textContent = `Valeu, ${nome}! Sua mensagem foi enviada com sucesso. 🎮`;
    resposta.style.color = "#4cff4c";
  } else {
    resposta.textContent = "Por favor, preencha seu nome antes de enviar!";
    resposta.style.color = "#ff4747";
  }
  form.reset();
});

// ====== ANIMAÇÃO SUAVE AO ROLAR ======
const elementos = document.querySelectorAll("article, aside");
window.addEventListener("scroll", () => {
  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;
    if (posicao < alturaTela - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

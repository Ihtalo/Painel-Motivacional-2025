// Atualiza relógio e data
function atualizarRelogio() {
  const agora = new Date();

  const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const diaSemana = diasSemana[agora.getDay()];
  const dia = agora.getDate().toString().padStart(2, '0');
  const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
  const ano = agora.getFullYear();
  const hora = agora.getHours().toString().padStart(2, '0');
  const minuto = agora.getMinutes().toString().padStart(2, '0');
  const segundo = agora.getSeconds().toString().padStart(2, '0');

  document.getElementById("dia-semana").textContent = diaSemana;
  document.getElementById("data").textContent = `${dia}/${mes}/${ano}`;
  document.getElementById("relogio").textContent = `${hora}:${minuto}:${segundo}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // Chama logo ao carregar

// Frases motivacionais para cada dia do mês
const frases = [
  "Acredite em si mesmo e tudo será possível.",
  "Você é mais forte do que pensa.",
  "Hoje é um ótimo dia para começar algo novo.",
  "Coragem é agir mesmo com medo.",
  "Persistência leva ao sucesso.",
  "Um passo de cada vez é o segredo da jornada.",
  "Desafios são oportunidades disfarçadas.",
  "A vitória pertence a quem não desiste.",
  "Faça com paixão ou não faça.",
  "A disciplina supera o talento.",
  "Você é o protagonista da sua história.",
  "Não espere por oportunidades. Crie-as.",
  "Grandes coisas levam tempo.",
  "Seja sua melhor versão todos os dias.",
  "O esforço de hoje é o sucesso de amanhã.",
  "Foque no que você pode controlar.",
  "A mudança começa com uma decisão.",
  "A jornada importa tanto quanto o destino.",
  "A mente é poderosa. Alimente-a bem.",
  "Comece pequeno. Pense grande.",
  "Erros são degraus para o crescimento.",
  "Acredite no processo.",
  "Ação transforma planos em realidade.",
  "Não pare até se orgulhar.",
  "Tenha fé e siga em frente.",
  "Seja constante, não perfeito.",
  "O impossível só parece até ser feito.",
  "Continue, mesmo que devagar.",
  "Sucesso exige esforço diário.",
  "Valorize cada progresso."
];

function mostrarFraseDoDia() {
  const hoje = new Date().getDate(); // 1 a 31
  const index = (hoje - 1) % frases.length;
  document.getElementById("frase-do-dia").textContent = frases[index];
}
mostrarFraseDoDia();

// Botão de tocar/pausar música
const music = document.getElementById("background-music");
const musicBtn = document.getElementById("toggle-music");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸️";
  } else {
    music.pause();
    musicBtn.textContent = "🎵";
  }
});

// Botão de modo claro/escuro
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

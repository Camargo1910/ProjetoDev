let visivel = false;

function toggleConteudo() {
  const carrossel = document.getElementById('meuCarrossel');
  const contador = document.getElementById('contador');
  const titulo = document.getElementById('titulo');
  const mensagem = document.getElementById('mensagem');

  document.getElementById('btn-conteudo').style.display = 'none';

  visivel = !visivel;

  if (visivel) {
    carrossel.classList.remove('oculto');
    contador.classList.remove('oculto');
    titulo.classList.remove('oculto');
    mensagem.classList.remove('oculto');
    startCarrossel();
    dispararConfete(); // chama a função com mais confete e duração
  } else {
    carrossel.classList.add('oculto');
    contador.classList.add('oculto');
    titulo.classList.add('oculto');
    mensagem.classList.add('oculto');
  }
}

function startCarrossel() {
  const trilha = document.getElementById('trilhaCarrossel');
  let posicao = 0;
  const larguraItem = 400; // ajuste conforme seu CSS

  setInterval(() => {
    posicao++;
    trilha.style.transform = `translateX(-${posicao * larguraItem}px)`;

    if (posicao >= trilha.children.length) {
      posicao = 0;
      trilha.style.transform = `translateX(0px)`;
    }
  }, 2000); // muda de imagem a cada 2 segundos
}

// 🎉 Função personalizada de confete
function dispararConfete() {
  const duration = 2 * 1000; // 5 segundos
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 10,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 10,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

const dataInicial = new Date(2024, 4, 25, 0, 0, 0); // 25 de maio de 2024, meia-noite

function atualizarContador() {
  const agora = new Date();
  const diferencaMs = agora - dataInicial;

  const segundosTotais = Math.floor(diferencaMs / 1000);
  const dias = Math.floor(segundosTotais / (3600 * 24));
  const horas = Math.floor((segundosTotais % (3600 * 24)) / 3600);
  const minutos = Math.floor((segundosTotais % 3600) / 60);
  const segundos = segundosTotais % 60;

  document.getElementById("contador").textContent = 
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
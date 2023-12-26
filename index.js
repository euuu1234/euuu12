// Código 1

const menu = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Código 2

window.sr = ScrollReveal({ reset: true });

sr.reveal('.revelar-1', { duration: 6000 });
sr.reveal('.revelar-2', { duration: 5000 });
sr.reveal('.revelar-3', { duration: 500 });

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("scroll-container");
  const trabalhosDivs = document.querySelectorAll(".trabalhos");

  function highlightCenterDiv() {
    const containerRect = scrollContainer.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;

    // Encontrar a div mais próxima do centro
    let closestDiv = trabalhosDivs[0];
    let closestDistance = Math.abs(containerCenterX - closestDiv.getBoundingClientRect().left);

    trabalhosDivs.forEach((div) => {
      const divCenterX = div.getBoundingClientRect().left + div.getBoundingClientRect().width / 2;
      const distance = Math.abs(containerCenterX - divCenterX);

      if (distance < closestDistance) {
        closestDiv = div;
        closestDistance = distance;
      }
    });

    // Remover a classe de destaque de todas as divs
    trabalhosDivs.forEach((div) => {
      div.classList.remove("destacada");
      // Redefinir os tamanhos padrão
      div.style.width = "150px"; // ou qualquer valor que você defina como padrão
      div.style.height = "25em"; // ou qualquer valor que você defina como padrão
    });

    // Adicionar a classe de destaque à div mais próxima do centro
    closestDiv.classList.add("destacada");
    // Ajustar os tamanhos da div destacada
    closestDiv.style.width = "200px"; // ou qualquer valor que você queira para a div destacada
    closestDiv.style.height = "30em"; // ou qualquer valor que você queira para a div destacada
  }

  // Adicionar um ouvinte de evento de rolagem
  scrollContainer.addEventListener("scroll", highlightCenterDiv);

  // Chamar a função inicialmente para destacar a div no centro
  highlightCenterDiv();
});

// Código adicional para controle de rolagem

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("scroll-container");
  const trabalhosDivs = document.querySelectorAll(".trabalhos");
  const scrollLeft = document.querySelector('.left');
  const scrollRight = document.querySelector('.right');
  const step = 100; // Ajuste conforme necessário

  function highlightCenterDiv() {
    // ... (seu código existente) ...
  }

  // Adicionar um ouvinte de evento de rolagem
  scrollContainer.addEventListener("scroll", highlightCenterDiv);

  // Adicionar um ouvinte de evento para a seta para a esquerda
  scrollLeft.addEventListener('click', function () {
    scrollContainer.scrollBy({
      top: 0,
      left: -step,
      behavior: 'smooth'
    });
  });

  // Adicionar um ouvinte de evento para a seta para a direita
  scrollRight.addEventListener('click', function () {
    scrollContainer.scrollBy({
      top: 0,
      left: step,
      behavior: 'smooth'
    });
  });

  // Chamar a função inicialmente para destacar a div no centro
  highlightCenterDiv();
});
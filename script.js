
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


// Abrir e fechar menu mobile
menuToggle.addEventListener("click", () => {

  const isOpen = navMenu.classList.toggle("show");

  menuToggle.setAttribute("aria-expanded", isOpen);

});


// Fechar menu ao clicar numa opção
document.querySelectorAll(".nav-menu a").forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("show");

    menuToggle.setAttribute("aria-expanded", "false");

    document.querySelector(".nav-menu a.active")
      ?.classList.remove("active");

    link.classList.add("active");

  });

});


// Fechar menu ao redimensionar para computador
window.addEventListener("resize", () => {

  if (window.innerWidth > 760) {

    navMenu.classList.remove("show");

    menuToggle.setAttribute("aria-expanded", "false");

  }

});


document.addEventListener("DOMContentLoaded", function () {

    const teamStage = document.getElementById("teamStage");

    if (!teamStage) return;

    const cards = Array.from(
        teamStage.querySelectorAll(".team-card")
    );

    if (cards.length !== 4) return;

    let currentIndex = 0;

    function updatePositions() {

        cards.forEach((card, index) => {

            const position =
                (index - currentIndex + cards.length) % cards.length;

            card.classList.remove(
                "position-1",
                "position-2",
                "position-3",
                "position-4"
            );

            card.classList.add(`position-${position + 1}`);

        });

    }

    updatePositions();

    // Rotação automática contínua
    setInterval(function () {

        currentIndex = (currentIndex + 1) % cards.length;

        updatePositions();

    }, 3200);

});

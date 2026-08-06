document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger-btn");
  const menu = document.getElementById("site-menu");

  if (!burger || !menu) return;

  function openMenu() {
    menu.classList.add("open");
    burger.classList.add("active");
    burger.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    menu.classList.remove("open");
    burger.classList.remove("active");
    burger.setAttribute("aria-expanded", "false");
  }

  burger.addEventListener("click", function (event) {
    event.stopPropagation();
    if (menu.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Ferme le menu quand on clique sur un lien
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Ferme le menu si on clique en dehors
  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
      closeMenu();
    }
  });

  // Ferme le menu automatiquement si on repasse en affichage large
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
});

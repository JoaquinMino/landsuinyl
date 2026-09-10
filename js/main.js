// Año atmatico(footer)
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar: esconder al bajar, mostrar al subir
const header = document.querySelector(".site-header");
let lastY = window.scrollY;

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  // si está muy arriba, siempre visible
  if (y < 80) {
    header.classList.remove("is-hidden");
    lastY = y;
    return;
  }

  // bajando => ocultar, subiendo => mostrar
  if (y > lastY) header.classList.add("is-hidden");
  else header.classList.remove("is-hidden");

  lastY = y;
});

// Cerrar menú mobile al clickear un link
const navLinks = document.querySelectorAll(".navbar .nav-link");
const navCollapse = document.getElementById("navMain");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navCollapse.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);
      bsCollapse.hide();
    }
  });
});

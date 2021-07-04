window.addEventListener("scroll", function () {
  const nav = document.querySelector("header");

  nav.classList.toggle("sticky", window.scrollY > 0);
});

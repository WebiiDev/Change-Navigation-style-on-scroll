const header = document.querySelector("header");

window.addEventListener("scroll", e => {
  if (window.scrollY > 100) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
});

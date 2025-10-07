const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll(".section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("data-section");

    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(target).classList.add("active");

    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

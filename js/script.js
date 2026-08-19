const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");


// ===============================
// MENU MOBILE
// ===============================

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("nav-open");

        const isOpen = nav.classList.contains("nav-open");

        menuButton.textContent = isOpen ? "✕" : "☰";

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );

    });


    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("nav-open");

            menuButton.textContent = "☰";

        });

    });

}


// ===============================
// HEADER AO ROLAR
// ===============================

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 30) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


// ===============================
// ANIMAÇÃO SIMPLES DE ENTRADA
// ===============================

const revealElements = document.querySelectorAll(
    ".section, .featured-project, .project-small, .tech-card, .service-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});
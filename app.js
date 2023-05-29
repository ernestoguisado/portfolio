const menuButton = document.querySelector("#menu-button");
const menuItems = document.querySelector("#menu");
const menuButtonIcon = document.querySelector("#open-button-icon");
const closeButtonIcon = document.querySelector("#close-button-icon");
const links = document.querySelectorAll("#menu a");

// ABRE MENU
menuButton.addEventListener("click", () => {
    menuItems.classList.toggle("hidden");
    menuButtonIcon.classList.toggle("hidden");
    closeButtonIcon.classList.toggle("hidden");
});

// MUESTRA MENU
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        menuItems.classList.remove("hidden");
        menuButtonIcon.classList.remove("hidden");
        closeButtonIcon.classList.add("hidden");
    } else {
        menuItems.classList.add("hidden");
        menuButtonIcon.classList.remove("hidden");
        closeButtonIcon.classList.add("hidden");
    }
});

// PLIEGA MENU EN VERSIÓN MOVIL
links.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
            menuItems.classList.add("hidden");
            menuButtonIcon.classList.remove("hidden");
            closeButtonIcon.classList.add("hidden");
        }
    });
});

/**DARK MODE*/

const darkButton = document.querySelector('#darkButton');

darkButton.addEventListener('click', function () {
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});

//Abre cada article

// Inicializar la página ocultando todos los artículos
window.onload = function() {
    const initialArticles = document.querySelectorAll('#estudios article');
    initialArticles.forEach((article) => {
        article.classList.add('hidden');
    });
};

// Eventos de click para cada botón
const buttons = document.querySelectorAll('button[data-id]');
const articles = document.querySelectorAll('article[data-id]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');

        articles.forEach(article => {
            if (article.getAttribute('data-id') === id) {
                article.classList.remove('hidden');
            } else {
                article.classList.add('hidden');
            }
        });
    });
});
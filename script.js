alert("Cher client  nous somme accepteé " + name);
// Fonction pour basculer le thème clair/sombre
const toggleThemeButton = document.getElementById('toggle-btn');
const body = document.body;

toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

// Fonction pour ouvrir et fermer le menu latéral
const menuButton = document.getElementById('menu-btn');
const sideBar = document.querySelector('.side-bar');
const closeButton = document.getElementById('close-btn');

menuButton.addEventListener('click', () => {
    sideBar.classList.add('active');
});

closeButton.addEventListener('click', () => {
    sideBar.classList.remove('active');
});

// Fonction pour fermer le menu latéral en cliquant à l'extérieur
document.addEventListener('click', (e) => {
    if (!sideBar.contains(e.target) && !menuButton.contains(e.target)) {
        sideBar.classList.remove('active');
    }
}); // Sélectionner les éléments nécessaires
const sideBar = document.querySelector('.side-bar');
const closeBtn = document.querySelector('#close-btn');
const openBtn = document.querySelector('#menu-btn'); // Ce bouton peut être ajouté pour ouvrir la barre latérale

// Fonction pour fermer la barre latérale
closeBtn.addEventListener('click', () => {
    sideBar.style.display = 'none';
});

// Fonction pour ouvrir la barre latérale
openBtn.addEventListener('click', () => {
    sideBar.style.display = 'block';
});
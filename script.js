// 1. TA BASE DE DONNÉES (À modifier avec tes choix)
const profiles = [
    {
        image: "images/profil1.jpg", 
        type: "linkedin", 
        name: "Jean Dupont",
        description: "A mené une équipe de 50 développeurs pour créer une IA révolutionnaire. Chiffre d'affaires généré : 2 millions d'euros."
    },
    {
        image: "images/profil2.jpg", 
        type: "interpol", 
        name: "Carmen Silva",
        description: "Recherchée pour fraude fiscale internationale et vol d'œuvres d'art inestimables au Louvre."
    }
    // Ajoute autant de profils que tu veux ici !
];

// 2. LOGIQUE DU JEU
let currentIndex = 0;
let score = 0;

const imgElement = document.getElementById("profile-img");
const buttonsContainer = document.getElementById("buttons-container");
const resultContainer = document.getElementById("result-container");
const resultTitle = document.getElementById("result-title");
const resultDesc = document.getElementById("result-desc");
const scoreElement = document.getElementById("score");

// Fonction pour charger un profil
function loadProfile() {
    if (currentIndex >= profiles.length) {
        imgElement.style.display = "none";
        buttonsContainer.style.display = "none";
        resultContainer.style.display = "block";
        resultTitle.innerText = "Jeu Terminé !";
        resultDesc.innerText = `Ton score final est de ${score}/${profiles.length}.`;
        document.querySelector('.next-btn').style.display = "none";
        return;
    }

    const profile = profiles[currentIndex];
    imgElement.src = profile.image;
    
    // Réinitialiser l'affichage
    buttonsContainer.style.display = "block";
    resultContainer.style.display = "none";
}

// Fonction pour vérifier la réponse
function checkAnswer(guess) {
    const profile = profiles[currentIndex];
    const isCorrect = guess === profile.type;

    if (isCorrect) {
        score++;
        scoreElement.innerText = score;
        resultTitle.innerText = "Bonne réponse ! ✅";
        resultTitle.style.color = "green";
    } else {
        resultTitle.innerText = "Mauvaise réponse ! ❌";
        resultTitle.style.color = "red";
    }

    // Afficher l'identité et les actes
    resultDesc.innerHTML = `<strong>${profile.name}</strong><br>${profile.description}`;
    
    // Cacher les boutons et montrer le résultat
    buttonsContainer.style.display = "none";
    resultContainer.style.display = "block";
}

// Passer au profil suivant
function nextProfile() {
    currentIndex++;
    loadProfile();
}

// Initialiser le premier profil au chargement
loadProfile();

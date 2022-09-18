burger = document.querySelector('.burger')
navBar = document.querySelector('.h-nav')
navList = document.querySelector('.v-class')

burger.addEventListener('click', ()=> {
    navList.classList.toggle('v-class');
    navBar.classList.toggle('h-nav');
})

document.getElementById("githubP1").onclick = function () {
    location.href = "https://github.com/Vaishali-Jaiswal/Portfolio-Website";
};

document.getElementById("githubP2").onclick = function () {
    location.href = "https://github.com/Vaishali-Jaiswal/Machine-Learning-Project";
};

document.getElementById("githubP3").onclick = function () {
    location.href = "https://github.com/Vaishali-Jaiswal/Spotify-Clone-App.git";
};


document.getElementById("githubP4").onclick = function () {
    location.href = "https://github.com/Vaishali-Jaiswal/The-Simon-Game";
};

document.getElementById("githubP5").onclick = function () {
    location.href = "https://github.com/Vaishali-Jaiswal/Drum-Kit-Game";
};

document.getElementById("githubP6").onclick = function () {
    location.href = "https://github.com/Vaishali-Jaiswal/Dice-Game";
};

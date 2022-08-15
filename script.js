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
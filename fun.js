
var noBut = document.querySelector('.no');
var yesBut = document.querySelector('.yes');
var backgroundDiv = document.getElementById('backgroundDiv');

let move = ()=> {

    var randomTop = getRandomValue(window.innerHeight - 100); // Adjusting for container height
        var randomLeft = getRandomValue(window.innerWidth - 100); // Adjusting for container width
        noBut.style.top = `${randomTop}px`;
        noBut.style.left = `${randomLeft}px`;


};

let gifChange = ()=> {
    backgroundDiv.style.backgroundImage = `url("https://media.giphy.com/media/I1GhlA9LXCCouY1lko/giphy.gif")`;


};




function getRandomValue(max) {
    return Math.floor(Math.random() * max);
}

noBut.addEventListener('mouseenter', move);
yesBut.addEventListener('click', gifChange);

const p = document.querySelector(".menu");
const intro = document.querySelector(".intro")
const navi = document.querySelector(".navigater")

function openIt(){
    p.classList.toggle("info");
    navi.classList.toggle("info");
    intro.classList.toggle("info");
    document.getElementById('myaudio').play()
}
const p = document.querySelector("#menu");
const intro = document.querySelector(".intro")

function openIt(){
    p.classList.toggle("info");
    intro.classList.toggle("info");
    document.getElementById('myaudio').play()
}
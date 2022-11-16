const p = document.querySelector("#arrow");
const pp = document.querySelector("#menu");

function openIt(){
    p.classList.toggle("info");
    pp.classList.toggle("info");
    document.getElementById('myaudio').play()
}
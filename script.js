const text = document.querySelector(".dusra-anime");

const textload = () => {
    setTimeout(()=> {
        text.textContent = "SOFTWARE INCUBATORS";
    },0);
    setTimeout(()=>{
        text.textContent = "DEVELOPER";
    },2000);
    setTimeout(()=>{
        text.textContent = "DESIGNER";
    },4000);
}

textload();
setInterval(textload,5000)
const changecolorbutton = document.getElementById("changecolorbutton");
const nochangecolorbutton = document.getElementById("nochangecolorbutton");
const part1 =document.getElementById("part1");
const part2 =document.getElementById("part2");
const part3 =document.getElementById("part3");

function colorchange(){
    part1.style.backgroundColor ="orange";
    part2.style.backgroundColor ="white";
    part3.style.backgroundColor ="green";
}
function nocolorchange(){
    part1.style.backgroundColor ="white";
    part2.style.backgroundColor ="blue";
    part3.style.backgroundColor ="white";
}

changecolorbutton.addEventListener("click",colorchange);
changecolorbutton.removeEventListener("click",nocolorchange);


const photo = document.getElementById('photu');
let topPosition = 0;
let leftPosition = 0;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        topPosition -= 10;
        photo.style.top = topPosition + 'px';
    } else if (event.key === 'ArrowDown') {
        topPosition += 10;
        photo.style.top = topPosition + 'px';
    } else if (event.key === 'ArrowLeft') {
        leftPosition -= 10;
        photo.style.left = leftPosition + 'px';
    } else if (event.key === 'ArrowRight') {
        leftPosition += 10;
        photo.style.left = leftPosition + 'px';
    }

    // Prevent the default behavior of arrow keys to prevent page scrolling.
    event.preventDefault();
});

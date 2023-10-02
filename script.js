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
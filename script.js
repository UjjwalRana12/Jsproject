const text = document.querySelector(".dusra-anime");

const textload = () => {
    setTimeout(()=> {
        text.textContent = "Software Incubators";
    },0);
    setTimeout(()=>{
        text.textContent = "pyaare";
    },2000);
    setTimeout(()=>{
        text.textContent = "content";
    },4000);
}

textload();
setInterval(textload,5000)
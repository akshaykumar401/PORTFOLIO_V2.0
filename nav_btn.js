const threeDot = document.querySelector(".icon");
const navElement = document.querySelector(".nav-element");

threeDot.addEventListener("click", ()=>{
    if(navElement.style.display == "block"){
        navElement.style.display = "none";
        navElement.style.animation == "dec";

    }else{
        navElement.style.display = "block";
        navElement.style.animation == "act";
    }
})

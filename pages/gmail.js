const mailBtn = document.querySelector(".Gmail");
let msg = document.querySelector(".msg");

mailBtn.addEventListener("click", ()=>{
    if(msg.style.display === "block"){
        msg.style.display = "none";
    }else{
        msg.style.display = "block";
    }
})
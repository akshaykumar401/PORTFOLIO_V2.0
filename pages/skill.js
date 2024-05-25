let skill_btn = document.querySelector(".option");
let skill_element = document.querySelector(".list");
let skill_direction = document.querySelector(".direction");

skill_btn.addEventListener("click", ()=>{
    if(skill_element.style.display === "block"){
        skill_element.style.display = "none";
        skill_direction.style.transform = "rotate(90deg)";
    }else{
        skill_element.style.display = "block";
        skill_direction.style.transform = "rotate(-90deg)";
    }
})

let hobby_btn = document.querySelector(".option_1");
let hobby_element = document.querySelector(".list_1");
let hobby_direction = document.querySelector(".direction_1");

hobby_btn.addEventListener("click", ()=>{
    if(hobby_element.style.display === "block"){
        hobby_element.style.display = "none";
        hobby_direction.style.transform = "rotate(90deg)";
    }else{
        hobby_element.style.display = "block";
        hobby_direction.style.transform = "rotate(-90deg)";
    }
})

let lang_btn = document.querySelector(".option_2");
let lang_element = document.querySelector(".list_2");
let lang_direction = document.querySelector(".direction_2");

lang_btn.addEventListener("click", ()=>{
    if(lang_element.style.display === "block"){
        lang_element.style.display = "none";
        lang_direction.style.transform = "rotate(90deg)";
    }else{
        lang_element.style.display = "block";
        lang_direction.style.transform = "rotate(-90deg)";
    }
})
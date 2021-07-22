document.addEventListener("DOMContentLoaded", () => {
    for(let img of document.querySelectorAll("img")){
        img.addEventListener("dragstart", (e) => {
            e.preventDefault();
        })
    }
    
    for(let a of document.querySelectorAll("a")){
        a.target = "__blank";
    }
});
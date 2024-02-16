const menuToggler = document.querySelector("#menutoggler");
const menuBar = document.querySelector("#menubar");


menuToggler.addEventListener("click", ()=>{
    menuBar.classList.toggle("hidden");
});
document.addEventListener("DOMContentLoaded", function () {
    let start = document.getElementById("start");

    let start_menu = document.getElementById("start-menu");

    start.addEventListener("click", function() {
        if(start_menu.style.display == "none") {
            start_menu.style.display = "block";
        } else {
            start_menu.style.display = "none";
        }
        
    })

})
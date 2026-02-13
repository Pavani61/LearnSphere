// Mobile Navbar Toggle

document.addEventListener("DOMContentLoaded", function () {

    const toggleBtn = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

});

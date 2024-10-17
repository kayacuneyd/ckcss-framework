document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".ck-accordion-header");
    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const content = this.nextElementSibling;
            content.classList.toggle("open");
        });
    });

    const dropdownToggles = document.querySelectorAll(".ck-dropdown-toggle");
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", function() {
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle("open");
        });
    });

    const navbarToggle = document.querySelector(".ck-navbar-toggle");
    const navbarMenu = document.querySelector(".ck-navbar-menu");
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener("click", function() {
            navbarMenu.classList.toggle("open");
        });
    }

    const navbarDropdownToggles = document.querySelectorAll(".ck-navbar-dropdown-toggle");
    navbarDropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", function(event) {
            event.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle("open");
        });
    });
});
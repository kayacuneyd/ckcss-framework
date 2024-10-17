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


    // Carousel Functionality
    const carousel = document.querySelector(".ck-carousel");
    if (carousel) {
        const carouselInner = carousel.querySelector(".ck-carousel-inner");
        const prevButton = carousel.querySelector(".ck-carousel-control-prev");
        const nextButton = carousel.querySelector(".ck-carousel-control-next");
        let currentIndex = 0;
        const items = carouselInner.children;
        const totalItems = items.length;

        function updateCarousel() {
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        prevButton.addEventListener("click", function() {
            currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
            updateCarousel();
        });

        nextButton.addEventListener("click", function() {
            currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
            updateCarousel();
        });
    }

    // Modal Functionality
    const modalTriggers = document.querySelectorAll("[data-modal-target]");
    const modalCloseButtons = document.querySelectorAll(".ck-modal-close");

    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", function() {
            const targetModal = document.querySelector(this.dataset.modalTarget);
            if (targetModal) {
                targetModal.classList.add("open");
            }
        });
    });

    modalCloseButtons.forEach(button => {
        button.addEventListener("click", function() {
            const targetModal = this.closest(".ck-modal");
            if (targetModal) {
                targetModal.classList.remove("open");
            }
        });
    });
});
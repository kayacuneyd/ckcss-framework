document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("ck-accordion");
            for (var i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    this.classList.toggle("ck-accordion-active");
                    var content = this.nextElementSibling;
                    if (content.classList.contains("show")) {
                        content.classList.remove("show");
                    } else {
                        content.classList.add("show");
                    }
                });
            }

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
/*typing animation*/
// Function to initialize Typed.js animation
function initializeTypedAnimation() {
    var typed = new Typed("#element", {
        strings: ["Web Developer", "Graphic Designer", " Web Designer."],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1000,
        startDelay: 500,
        loop: false,
        showCursor: true,
        cursorChar: "|"
    });
}


/*image animation*/
// Function to add animation class to image
function animateImage() {
    document.getElementById("animated-img").classList.add("animate-image");
}
// Function to handle smooth scrolling on navigation click
function setupSmoothScroll() {
    document.querySelectorAll('').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
                // Trigger animations when scrolling to the "about" section
                if (target.id === "about") {
                    target.querySelectorAll(".spaCon").forEach(spaCon => {
                        spaCon.classList.add("visible");
                    });
                }
            }
        });
    });
}
// Initialize everything when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    initializeTypedAnimation();
    animateImage();
    setupIntersectionObserver();
    setupSmoothScroll();
});


/*To add function of hamberger*/
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamberger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


/*To add a plus button in skill*/
function toggleDescription(button) {
    var description = button.nextElementSibling;
    description.classList.toggle("show");
    button.textContent = description.classList.contains("show") ? "×" : "+";
}
document.querySelectorAll(".header").forEach(header => {
    header.addEventListener("click", event => {
        event.stopPropagation(); // Prevents the ul click event from firing
        let content = header.nextElementSibling;
        let button = header.querySelector(".toggle-button");
        if (content.classList.contains("visible")) {
            content.classList.remove("visible");
            button.textContent = "+";
        } else {
            document.querySelectorAll(".content").forEach(innerContent => {
                innerContent.classList.remove("visible");
            });
            document.querySelectorAll(".toggle-button").forEach(innerButton => {
                innerButton.textContent = "+";
            });
            content.classList.add("visible");
            button.textContent = "×";
        }
    });
});


/*to add right arrow */
document.addEventListener('DOMContentLoaded', function () {
    const toggleIcon = document.getElementById('toggle-icon');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const picturesPro = document.querySelector('.pictures-pro');
    let scrollAmount = 0;
    const scrollStep = picturesPro.clientWidth / 1; // Adjust this value for smoother scrolling
    toggleIcon.addEventListener('click', function () {
        const maxScrollLeft = picturesPro.scrollWidth - picturesPro.clientWidth;
        if (scrollAmount < maxScrollLeft) {
            scrollAmount = Math.min(scrollAmount + scrollStep, maxScrollLeft);
            picturesPro.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
            if (scrollAmount >= maxScrollLeft) {
                rightArrow.style.display = 'none';
                leftArrow.style.display = 'block'; // Change to left arrow icon
            }
        } else {
            scrollAmount = 0;
            picturesPro.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
            rightArrow.style.display = 'block';
            leftArrow.style.display = 'none'; // Change back to right arrow icon
        }
    });
});
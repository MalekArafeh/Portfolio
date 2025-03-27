document.addEventListener("DOMContentLoaded", function () {
    // console.log("DOM fully loaded");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // console.log(entry); // Debugging: Check if elements are detected
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.1 }); // Trigger when at least 10% of the element is visible

    const hiddenElements = document.querySelectorAll('.t1'); // Ensure you are selecting elements correctly
    hiddenElements.forEach((el) => observer.observe(el));
    const hiddenElement = document.querySelectorAll('.two'); // Ensure you are selecting elements correctly
    hiddenElement.forEach((el) => observer.observe(el));
    const hiddenElemen = document.querySelectorAll('.here'); // Ensure you are selecting elements correctly
    hiddenElemen.forEach((el) => observer.observe(el));
    hiddenElement.forEach((el) => observer.observe(el));
    const hiddenEleme = document.querySelectorAll('.footer'); // Ensure you are selecting elements correctly
    hiddenEleme.forEach((el) => observer.observe(el));
});


// scrolling effect


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar-collapse .navbar-nav .nav-item a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-350;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            console.log(id);

            navLinks.forEach(link => {
                console.log(navLinks);
                link.classList.remove('active');
            });

            let activeLink = document.querySelector('.navbar-collapse .navbar-nav .nav-item a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};







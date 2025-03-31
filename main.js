// Smooth scroll functionality for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Scroll-to-top button functionality
window.onscroll = function () {
    toggleScrollToTopButton();
};

function toggleScrollToTopButton() {
    const scrollTopButton = document.getElementById("movetop");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
}

// When the user clicks on the scroll-to-top button
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Form validation for the appointment page
const appointmentForm = document.querySelector("form");
if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (event) {
        // Prevent form submission to validate the form first
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        const service = document.getElementById("service").value;

        // Basic form validation
        if (!name || !email || !date || !service) {
            alert("Please fill all the fields before submitting the form.");
            return;
        }

        // If all fields are filled, submit the form (you can add AJAX request here)
        alert("Your appointment has been successfully booked!");
        appointmentForm.submit();
    });
}

// Contact form validation (same approach as appointment form)
const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const contactName = document.getElementById("name").value;
        const contactEmail = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Basic validation
        if (!contactName || !contactEmail || !message) {
            alert("Please fill all fields before submitting your message.");
            return;
        }

        // Handle form submission
        alert("Your message has been sent successfully!");
        contactForm.submit();
    });
}

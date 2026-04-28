/* --- Assignment 3: JavaScript and DOM Interactivity --- */

// 1. SELECTING DOM ELEMENTS
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

const mobileMenuBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

const contactForm = document.getElementById('contact-form');
const formError = document.getElementById('form-error');
const formSuccess = document.getElementById('form-success');

const faqQuestions = document.querySelectorAll('.faq-question');
const header = document.getElementById('header');

// 2. FEATURE: THEME SWITCHER (classList.toggle)
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        // Update text/icon content dynamically
        if (body.classList.contains('light-mode')) {
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }
    });
}

// 3. FEATURE: RESPONSIVE NAV TOGGLE
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// 4. FEATURE: FAQ ACCORDION
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.plus-minus');
        
        // Toggle the 'hidden' class
        answer.classList.toggle('hidden');
        
        // Update content based on state
        if (answer.classList.contains('hidden')) {
            icon.textContent = '+';
        } else {
            icon.textContent = '-';
        }
    });
});

// 5. FEATURE: FORM VALIDATION (event.preventDefault)
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const messageInput = document.getElementById('message').value.trim();
        
        // Basic validation logic
        if (nameInput === "" || emailInput === "" || messageInput === "") {
            event.preventDefault(); // Stop form submission
            formError.textContent = "All fields are required!";
            formError.classList.remove('hidden');
            formSuccess.classList.add('hidden');
        } else if (!emailInput.includes('@')) {
            event.preventDefault();
            formError.textContent = "Please enter a valid email address.";
            formError.classList.remove('hidden');
            formSuccess.classList.add('hidden');
        } else {
            // If validation passes
            event.preventDefault(); // Preventing actual submission for demo purposes
            formError.classList.add('hidden');
            formSuccess.classList.remove('hidden');
            contactForm.reset();
        }
    });
}

// 6. DYNAMIC HEADER EFFECT
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
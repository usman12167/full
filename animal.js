
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.classList.remove('active'); 
    });
    document.getElementById(sectionId).classList.add('active');
}


function showAdditionQuiz() {
    const quizDiv = document.getElementById('quiz');
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const correctAnswer = num1 + num2;

    quizDiv.innerHTML = `
        <p>What is ${num1} + ${num2}?</p>
        <input type="number" id="answer" />
        <button onclick="checkAnswer(${correctAnswer})">Submit</button>
        <p id="feedback"></p>
    `;
}

function checkAnswer(correctAnswer) {
    const userAnswer = document.getElementById('answer').value;
    const feedback = document.getElementById('feedback');
    if (parseInt(userAnswer) === correctAnswer) {
        feedback.textContent = 'Correct!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Incorrect. Try again!';
        feedback.style.color = 'red';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('abc'); 
});

function playSound(letter) {
    const audio = document.getElementById(letter);
    audio.currentTime = 0;
    audio.play();
  }


  const navbar = document.querySelector('.navbar');
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        const overlay = document.querySelector('.overlay');
        let isMenuOpen = false;

        // Scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Toggle mobile menu
        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            mobileNavToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        }

        mobileNavToggle.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMenu();
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) toggleMenu();
        });

        // Prevent scroll when menu is open
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                toggleMenu();
            }
        });
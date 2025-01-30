function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.classList.remove('active'); 
    });
    document.getElementById(sectionId).classList.add('active'); 
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
  
  const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none"; 
    }
});



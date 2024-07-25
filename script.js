document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const nav = document.querySelector('.nav');

    menuIcon.addEventListener('click', () => {
        nav.classList.add('active');
    });

    closeIcon.addEventListener('click', () => {
        nav.classList.remove('active');
    });

    // Existing typing effect code
    const textElement = document.querySelector('.typing');
    const textArray = ["creating user-friendly interfaces.", "Let's connect and grow together!"];
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            textElement.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            textElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingSpeed + 1100);
        }
    }

    type();
});

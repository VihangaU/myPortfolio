function toggleMenu(){
    const menu = document.querySelector(".menu-link");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}  

window.addEventListener('scroll', () => {
    const progressSections = document.querySelectorAll('.progress-section');

    progressSections.forEach(section => {
        const progressBar = section.querySelector('.progress-bar');
        const progressLabel = section.querySelector('.progress-label');
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
            // Get the fixed progress value from the data attribute
            const fixedProgress = progressBar.getAttribute('data-progress');

            progressBar.style.width = `${fixedProgress}%`;
            progressLabel.textContent = `${fixedProgress}%`;
        }
    });
});

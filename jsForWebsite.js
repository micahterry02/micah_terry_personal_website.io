const COOLDOWN_PERIOD = 10 * 60 * 1000; // 10 minutes

let welcomeScreen = document.querySelector(".welcomeScreen");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
    let lastRun = localStorage.getItem('welcomeScreenLastRun');
    let now = new Date().getTime();

    if (!lastRun || now - lastRun > COOLDOWN_PERIOD) {
        // Run the animation if cooldown period has passed
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.add('active');
                }, (idx + 1) * 400);
            });

            setTimeout(() => {
                logoSpan.forEach((span, idx) => {
                    setTimeout(() => {
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx + 1) * 50);
                });
            }, 2000);

            setTimeout(() => {
                welcomeScreen.style.top = '-100vh';
            }, 2300);
        });

        // Update last run time in localStorage
        localStorage.setItem('welcomeScreenLastRun', now);
    } else {
        // Ensure the welcome screen still scrolls up even if the animation doesn't run
        setTimeout(() => {
            welcomeScreen.style.top = '-100vh';
        }, 1000); // Adjust timing as needed
    }
});
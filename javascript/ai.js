/*mouse follow up*/
document.addEventListener('mousemove', function(e) {
    const circle = document.getElementById('circle');
    const mouseX = e.clientX;
    const mouseY = e.clientY + window.scrollY; // Adjust for scroll position
    circle.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
});

document.addEventListener('scroll', function() {
    const circle = document.getElementById('circle');
    circle.style.transform += `translate(0px, ${window.scrollY}px)`;
});

document.addEventListener('mousemove', function() {
    const circle = document.getElementById('circle');
    circle.style.opacity = 1;
    clearTimeout(window.mouseTimeout);
});


const themeButton = document.getElementById('theme-button');
const themeIcon = document.getElementById('theme-icon');

let isDarkTheme = false;

themeButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeIcon.src = 'Image/night-mode.png';
        themeIcon.alt = 'Night Mode Icon';
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeIcon.src = 'Image/day-mode.png';
        themeIcon.alt = 'Day Mode Icon';
    }

    const currentTheme = isDarkTheme ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.src = 'Image/night-mode.png';
    themeIcon.alt = 'Night Mode Icon';
    isDarkTheme = true;
} else if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.src = 'Image/day-mode.png';
    themeIcon.alt = 'Day Mode Icon';
    isDarkTheme = false;
}

function closeWebsite() {
    window.close();
}

function minimizeWindow() {
    (document.exitFullscreen)
    document.exitFullscreen();
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var meridiem = "AM";

    if (hours >= 12) {
        meridiem = "PM";
        hours = hours % 12 || 12;
    }

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;

    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

function enterFullScreenOnMobile() {
    if (window.innerWidth <= 768) {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }
    }
}

window.onload = enterFullScreenOnMobile;
const images = document.querySelectorAll('.column img');

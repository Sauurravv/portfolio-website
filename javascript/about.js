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
    window.mouseTimeout = setTimeout(() => {
        circle.style.opacity = 0.5; // Change opacity when the mouse stops moving
    }, 200); // Time in milliseconds to change the opacity after the mouse stops
});


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

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
        document.getElementById("arrowIcon").src = getArrowImage();
        document.getElementById("backToTopBtn").href = "#top";
        document.getElementById("backToTopBtn").title = "Back to Top";
        document.getElementById("backToTopBtn").setAttribute("aria-label", "Back to Top");
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function getArrowImage() {

    var isDarkTheme = document.body.classList.contains("dark-theme");
    if (isDarkTheme) {
        return "Image/dark-up-arrow.png";
    } else {
        return "Image/up-arrow.png";
    }
}
document.querySelectorAll('.contact-links a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelectorAll('.contact-links a').forEach(otherLink => {
            otherLink.classList.remove('active');
            otherLink.style.opacity = '0.3'; // Reset opacity of other links
        });
        this.classList.add('active');
        this.style.opacity = '1'; // Set opacity of clicked link to 1
        window.open(this.href, '_blank');
    });

    link.addEventListener('mouseover', function () {
        document.querySelectorAll('.contact-links a').forEach(otherLink => {
            if (otherLink !== this) {
                otherLink.style.opacity = '0.5'; // Reduce opacity of other links on hover
            }
        });
    });

    link.addEventListener('mouseout', function () {
        document.querySelectorAll('.contact-links a').forEach(otherLink => {
            otherLink.style.opacity = '1'; // Restore opacity of other links on mouseout
        });
    });
});


/*footer*/
document.addEventListener('DOMContentLoaded', () => {
    const emojis = [
        '🪄', '👨🏼‍💻', '💻', '🖱️', '⌨️',
        '🧿', '🪷', '🦂', '😜', '⚽',
    ];

    function getRandomEmoji() {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        return emojis[randomIndex];
    }

    function updateEmoji() {
        const emojiContainer = document.getElementById('emojiContainer');
        emojiContainer.textContent = getRandomEmoji();
    }

    // Update the emoji every 600 milliseconds
    setInterval(updateEmoji, 300);

    // Initial update to show an emoji immediately
    updateEmoji();
});

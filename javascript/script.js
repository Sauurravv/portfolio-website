/* script.js */
document.addEventListener('mousemove', function(e) {
    const circle = document.getElementById('circle');
    const mouseX = e.clientX;
    const mouseY = e.clientY + window.scrollY; // Adjust for scroll position
    circle.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
    circle.style.opacity = 1;

    // Clear previous timeout
    clearTimeout(window.mouseTimeout);
});

// Functions to enlarge and shrink the circle
function enlargeCircle() {
    const circle = document.getElementById('circle');
    circle.style.width = "35px";
    circle.style.height = "35px";
}

function shrinkCircle() {
    const circle = document.getElementById('circle');
    circle.style.width = "20px";
    circle.style.height = "20px";
}

// Event listeners for hover effects
const nameElement = document.getElementById('name');
const selectedPostElement = document.getElementById('selected-post');
const notableWorkElement = document.getElementById('notable-work');

nameElement.addEventListener('mouseenter', enlargeCircle);
nameElement.addEventListener('mouseleave', shrinkCircle);

selectedPostElement.addEventListener('mouseenter', enlargeCircle);
selectedPostElement.addEventListener('mouseleave', shrinkCircle);

notableWorkElement.addEventListener('mouseenter', enlargeCircle);
notableWorkElement.addEventListener('mouseleave', shrinkCircle);

/*apple ko tinta button*/

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


/*clock*/
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



/*
document.addEventListener("DOMContentLoaded", function () {
    const albumPoster = document.getElementById("albumPoster");
    albumPoster.addEventListener("click", toggleVinylAndSong);

    const sauravImg = document.getElementById("sauravImg");
    sauravImg.addEventListener("click", toggleVinylAndSong);
});

let isPlaying = false;

function toggleVinylAndSong(event) {
    const clickedElementId = event.target.id;
    const validElements = ["sauravImg", "albumPoster"];

    if (validElements.includes(clickedElementId)) {
        const vinyl = document.getElementById("vinylImg");
        const audio = document.getElementById("audioPlayer");

        if (isPlaying) {
            vinyl.style.animationPlayState = "paused";
            audio.pause();
        } else {
            vinyl.style.animationPlayState = "running";
            audio.play();
        }

        isPlaying = !isPlaying;
    }
}
*/


function enterFullScreenOnMobile() {
    if (window.innerWidth <= 768) {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }
    }
}

window.onload = enterFullScreenOnMobile;
const images = document.querySelectorAll('.column img');





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


/* blog ko js*/



function setupHoverEffect(blogClass) {
    const hoverLinks = document.querySelectorAll(`.${blogClass} .hover-link`);
    const floatingImage = document.getElementById('floatingImage');
    let isHovering = false;
    let lastX = 0, lastY = 0;

    function positionImage(event) {
        if (isHovering) {
            lastX = event.pageX;
            lastY = event.pageY;
            requestAnimationFrame(updateImagePosition);
        }
    }

    function updateImagePosition() {
        if (isHovering) {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                floatingImage.style.left = `${lastX + 20}px`;
            } else if (screenWidth === 1024) {
                floatingImage.style.left = `${lastX + 30}px`;
            } else {
                floatingImage.style.left = `${lastX + 10}px`;
            }
            floatingImage.style.top = `${lastY + 10}px`;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setupHoverEffect('blog1');
    setupHoverEffect('blog2');
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

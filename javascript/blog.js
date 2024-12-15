/* mouse follow up */
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
const tittleElements = document.querySelectorAll('.tittle');
const tittle2Elements = document.querySelectorAll('.tittle2');

// Adding event listeners to elements with class tittle
tittleElements.forEach(function(tittleElement) {
    tittleElement.addEventListener('mouseenter', enlargeCircle);
    tittleElement.addEventListener('mouseleave', shrinkCircle);
});

// Adding event listeners to elements with class tittle2
tittle2Elements.forEach(function(tittle2Element) {
    tittle2Element.addEventListener('mouseenter', enlargeCircle);
    tittle2Element.addEventListener('mouseleave', shrinkCircle);
});

function closeWebsite() {
    window.close();
}

function minimizeWindow() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
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

document.addEventListener('DOMContentLoaded', () => {
    const blogItems = document.querySelectorAll('.blog-item');
    const searchInput = document.getElementById('search');

    // Function to handle search input and filter blog items
    function searchPosts() {
        const query = searchInput.value.toLowerCase();
        
        if (query.trim() === "") {
            blogItems.forEach(item => item.style.display = 'block');
            return;
        }

        blogItems.forEach(item => {
            const title = item.querySelector('.tittle, .tittle2').textContent.toLowerCase();
            const content = item.querySelector('.tittle a, .tittle2 a').textContent.toLowerCase();
            
            if (title.includes(query) || content.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', searchPosts);
});

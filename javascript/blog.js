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
            const title = item.querySelector('.btittle').textContent.toLowerCase();
            const content = item.querySelector('.btittle a').textContent.toLowerCase();
            
            if (title.includes(query) || content.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', searchPosts);

    blogItems.forEach(item => {
        const floatingImage = item.querySelector('.floating-image');
        const title = item.querySelector('.btittle');

        item.addEventListener('mouseenter', () => {
            floatingImage.style.opacity = '1';

            item.addEventListener('mousemove', (e) => {
                // Calculate new position of the floating image
                const rect = item.getBoundingClientRect();
                floatingImage.style.left = `${e.clientX - rect.left}px`;
                floatingImage.style.top = `${e.clientY - rect.top}px`;
            });
        });

        item.addEventListener('mouseleave', () => {
            floatingImage.style.opacity = '0';
            item.removeEventListener('mousemove', () => {});
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var contentHeight = document.getElementById('content').offsetHeight;
    var yOffset = window.pageYOffset;
    var windowHeight = window.innerHeight;

    // Check if scrolled to bottom of content
    if (yOffset + windowHeight >= contentHeight) {
        footer.classList.add('fixed');
    } else {
        footer.classList.remove('fixed');
    }
});

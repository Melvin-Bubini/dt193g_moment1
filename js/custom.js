window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 1) {
        navbar.classList.add("transparent");
    } else {
        navbar.classList.remove("transparent");
    }
});

document.getElementById('scroll-btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#answers-section').scrollIntoView({behavior: 'smooth'});
});
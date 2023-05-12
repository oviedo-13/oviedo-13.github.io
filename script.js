const hamburger = document.querySelector(".hamburger");
const hamIcon = document.querySelector(".ham-i");

hamburger.onclick = () => {
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");

    if (navBar.classList.contains("active")) {
        hamIcon.classList.remove("fa-bars");
        hamIcon.classList.add("fa-caret-up");
    } else {
        hamIcon.classList.add("fa-bars");
        hamIcon.classList.remove("fa-caret-up");
    }
}
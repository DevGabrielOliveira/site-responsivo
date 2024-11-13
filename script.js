
function menuAbrir() {
    let menuMobile = document.querySelector(".nav-list-mobile");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
    } else {
        menuMobile.classList.add("open");
    }
}
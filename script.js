// ----------scroll to top feature
window.addEventListener("scroll", () => {
    let scroll_top = document.querySelector(".scroll_top")
    if (window.pageYOffset > 400) {
        scroll_top.classList.add("active")
    }
    else {
        scroll_top.classList.remove("active")
    }
})
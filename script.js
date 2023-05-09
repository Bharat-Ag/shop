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

let url = "item.json";


fetch(url)
    .then((response) => {
        return response.json();
    }).then((res) => {
        for (var i in res) {
            console.log(`${res[i].description.Fit_Type} , ${res[i].price}`);
        }
    }).catch((error) => {
        console.log("failed to ftech");
    })

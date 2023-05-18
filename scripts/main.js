const backButton = document.getElementById("backButton")

window.addEventListener("scroll", event => {
    if (window.scrollY > 0) {
        backButton.classList.add("show")
    } else {
        backButton.classList.remove("show")
    }
})
window.addEventListener("scroll", function () {
    const container = document.querySelector(".div-style")
    const img = document.createElement("img")
    img.src = "../assets/body.jpeg"
    img.alt = "longcat"
    img.className = "img-no-margin"
    container.appendChild(img)
})

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".div-style")
    for (let i = 10; i <= 30; i++) {
        const img = document.createElement("img")
        img.src = "../assets/body.jpeg"
        img.alt = "longcat"
        img.className = "img-no-margin"
        container.appendChild(img)
    }
})

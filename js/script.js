let content = document.getElementById("content")
let show = document.getElementById("showContent")
let hide = document.getElementById("hideContent")

show.addEventListener("click", () => {
    content.style.display = "block"
    hideContent.style.display = "block"
    showContent.style.display = "none"
    hideContent.style.margin = "auto"
})

hide.addEventListener("click", () => {
    content.style.display = "none"
    showContent.style.display = "block"
    hideContent.style.display = "none"
    showContent.style.margin = "auto"
})
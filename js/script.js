const cards = document.querySelectorAll(".card")

cards.forEach(card => {

card.addEventListener("mousemove", e => {

card.style.transform =
"rotateY(5deg) rotateX(5deg)"

})

card.addEventListener("mouseleave", () => {

card.style.transform = "rotateY(0) rotateX(0)"

})

})
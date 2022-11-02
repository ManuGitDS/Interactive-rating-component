const ratingValue = document.querySelectorAll(".value")
const qualification = document.getElementById("qualification")
const ratingCard = document.querySelector(".rating__card")
const thankYou = document.querySelector(".thankYou__card")
const submitButton = document.querySelector(".button")

let selectedNumber = false

ratingValue.forEach((boton) => {
    boton.addEventListener("click", addColorbtn)
})

function addColorbtn() {
    clearColorbtn()
    this.classList.add("activeButton")
    qualification.innerHTML = "You selected " + this.innerHTML + " out of 5"
    selectedNumber = true
}

function clearColorbtn() {
    ratingValue.forEach((clear) => {
        clear.classList.remove("activeButton")
    })
}

submitButton.addEventListener("click", sendValue)

function sendValue() {
    if (selectedNumber) {
        ratingCard.classList.add("inactive")
        thankYou.classList.remove("inactive")
    } else {
        submitButton.innerHTML = "RATE US PLEASE"
        setTimeout(function () {
            submitButton.innerHTML = "SUBMIT"
        }, 2000)
    }
}


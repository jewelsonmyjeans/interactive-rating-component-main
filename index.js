

const reviewPage = document.querySelector('.review-page')
const thankYouContainer = document.querySelector('.thank-you-container')
const submitBtn = document.querySelector('.btn')
const buttons = document.querySelectorAll(".number")
const reviewValue = document.querySelector('.review-value')

let value;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        buttons.forEach((button) => button.classList.remove("rating-change"))
        e.target.classList.add("rating-change")
        value = e.target.textContent
    })
})

submitBtn.addEventListener('click', () => {
    reviewValue.textContent = value;
    reviewPage.style.display = "none";
    thankYouContainer.style.display = "flex";
})
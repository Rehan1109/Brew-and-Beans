function showCafeDetails() {
    console.log("Welcome to " + cafeName);
    console.log("Coffee price: ₹" + coffeePrice);
}

showCafeDetails();

const bookingForm = document.querySelector("#booking-form");
const formMessage = document.querySelector("#form-message");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();
        formMessage.textContent = "Thank you! We have received your reservation request.";
        bookingForm.reset();
    });
}
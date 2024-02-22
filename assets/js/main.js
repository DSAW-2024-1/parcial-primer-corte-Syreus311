const signUpCard = document.getElementById("sign-up-card");
const successCard = document.getElementById("success-card");
const signUpBtn = document.getElementById("sign-up-btn");
const successBtn = document.getElementById("success-btn");
const forms = document.querySelector(".needs-validation");
const emailInput = document.getElementById("sign-up-form");
const enteredEmail = document.getElementById("entered-email");

const toggleCards = () => {
    signUpCard.classList.toggle("d-none");
    successCard.classList.toggle("d-none");
};

const validation = () => {
    forms.addEventListener(
        "submit",
        (e) => {
            if (!forms.checkValidity() || emailInput.validity.valid) {
                e.preventDefault();
                e.stopPropagation();
                forms.classList.add("was-validated");
            } else {
                forms.classList.remove("was-validated");
            }
        },
        false
    );

    emailInput.addEventListener("input", () => {
        if (emailInput.validity.valid) {
            emailInput.classList.remove("is-invalid");
            emailInput.classList.add("is-valid");
        } else {
            emailInput.classList.remove("is-valid");
            emailInput.classList.add("is-invalid");
        }
    });
};

validation();

signUpBtn.addEventListener("click", () => {
    if (forms.checkValidity()) {
        forms.classList.remove("was-validated");
        toggleCards();
        enteredEmail.innerText = emailInput.value;
    }
});

successBtn.addEventListener("click", () => {
    forms.classList.remove("was-validated");
    emailInput.classList.remove("is-valid");
    emailInput.value = "";
});

// Get form elements
const newsletter = document.querySelector(".newsletter");
const form = document.querySelector(".newsletter__form");
const email = document.getElementById("email");
const successContainer = document.querySelector(".success-container");
const dismissButton = document.querySelector(".success-button");

// Regular expressions for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let flag = false;

// Form submission event listener
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("hello from inside");

  let isValid = true;

  // Validate email
  if (!emailRegex.test(email.value.trim())) {
    showOrRemoveError(email, "Please enter a valid email address");
    isValid = false;
  } else {
    showOrRemoveError(email);
  }

  // If validation pass, submit the form
  if (isValid) {
    form.reset();
    newsletter.classList.add("hide");
    successContainer.classList.remove("hide");
    flag = true;
  }
});

// Dismiss message event listener
dismissButton.addEventListener("click", function () {
  if (flag) {
    newsletter.classList.remove("hide");
    successContainer.classList.add("hide");
    flag = false;
  }
});

// Function to show error messages
function showOrRemoveError(element, message) {
  const parent =
    element.closest(".newsletter__form-group") || element.parentElement;
  const errorSpan = parent.querySelector("#email-error");

  if (message) {
    errorSpan.textContent = message;
    errorSpan.classList.add("error-message");
    element.setAttribute("aria-invalid", "true");
  } else {
    errorSpan.textContent = "";
    errorSpan.classList.remove("error-message");
    element.setAttribute("aria-invalid", "false");
  }
}

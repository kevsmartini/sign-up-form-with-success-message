const emailInput = document.querySelector(".email-input");
const btnInput = document.querySelector(".btn-input");
const invalidEmail = document.querySelector(".invalid-email");
const newsletterSuccess = document.querySelector(".newsletter-success");
const newsletterContainer = document.querySelector(".newsletter-container");
const userEmail = document.querySelector(".user-email");
const dismissMesssageBtn = document.querySelector(".dismiss-messsage");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btnInput.addEventListener("click", (event) => {
  event.preventDefault();
  const email = emailInput.value;

  if (email === "" || !emailRegex.test(email)) {
    emailInput.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
    invalidEmail.style.display = "block";
    emailInput.style.border = "1px solid var(--Tomato)";
    emailInput.style.color = "red";
  } else {
    newsletterSuccess.style.display = "grid";
    newsletterContainer.style.display = 'none'
    userEmail.textContent = email
    emailInput.value = ''

  }
});

function resetStyles() {
  emailInput.style.backgroundColor = "";
  emailInput.style.border = "";
  emailInput.style.color = "";
  invalidEmail.style.display = "none";
}

emailInput.addEventListener("input", () => {
  if (emailInput.value === "") {
    resetStyles();
  }
});
emailInput.addEventListener("focus", () => {
  resetStyles(); // Restablece los estilos al hacer clic en el campo
});

dismissMesssageBtn.addEventListener('click',()=>{
  newsletterSuccess.style.display = "none";
  newsletterContainer.style.display = 'flex'


})

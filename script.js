const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", () => {
  formMessage.textContent = "Sending your message...";
});

// Validate the form 
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Form validation 
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if (validateEmail(email) && name.trim() !== "" && message.trim() !== "") {
      // Form submission 
      console.log("Form submitted successfully");
      // Reset the form
      document.getElementById("contact-form").reset();
    } else {
      alert("Please fill out all fields correctly.");
    }
  });

function validateEmail(email) {
  // Regular expression for email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

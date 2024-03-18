// Menu scroll animation
let prevScrollPos = window.scrollY; // Initial scroll position

window.addEventListener("scroll", function () {
  let currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
    document.querySelector(".menu").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-80px";
    document.querySelector(".menu").style.top = "-80px";
  }

  prevScrollPos = currentScrollPos;
});

// Validate the contact form 
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Form validation logic here
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if (validateEmail(email) && name.trim() !== "" && message.trim() !== "") {
      // Form submission logic here
      console.log("Form submitted successfully");
      // Reset the form
      document.getElementById("contact-form").reset();
    } else {
      alert("Please fill out all fields correctly.");
    }
  });

function validateEmail(email) {
  // Regular expression for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

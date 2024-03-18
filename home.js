document.addEventListener("DOMContentLoaded", function () {
  // To access the login and sign up buttons
  const loginButton = document.querySelector(".login");
  const signupButton = document.querySelector(".signup");

  // To access the login and sign up popups
  const loginPopup = document.getElementById("loginPopup");
  const signupPopup = document.getElementById("signupPopup");

  // Function to open a popup and close any already opened popup
  function openPopup(popup) {
    // Close any already opened popup
    if (popup === loginPopup && signupPopup.style.display === "block") {
      signupPopup.style.display = "none";
    } else if (popup === signupPopup && loginPopup.style.display === "block") {
      loginPopup.style.display = "none";
    }

    // Open the selected popup
    popup.style.display = "block";
  }

  // To handle the display of the login popup
  loginButton.addEventListener("click", function () {
    openPopup(loginPopup);
  });

  // To handle the display of the signup popup
  signupButton.addEventListener("click", function () {
    openPopup(signupPopup);
  });

  // Close the login popup when the cancel button is clicked
  document
    .getElementById("login-cancelbtn")
    .addEventListener("click", function () {
      loginPopup.style.display = "none";
    });

  // Close the signup popup when the cancel button is clicked
  document
    .getElementById("signup-cancelbtn")
    .addEventListener("click", function () {
      signupPopup.style.display = "none";
    });
});

// Check the login-form
document
  .getElementById("login-submit")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Get email, username and password from form
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    var email = document.getElementById("login-email").value;

    // Create a regular expression for the default values of email and password
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Check for the default value
    if (
      username.trim() === "" ||
      password.trim() === "" ||
      email.trim() === ""
    ) {
      // Display error message
      alert("Please enter email, username and password");
    } else if (password.length < 8 || !passwordRegex.test(password)) {
      // Check if password is at least 8 characters long and contains at least one number and one symbol
      alert(
        "Password must be at least 8 characters long and contain at least one number and one symbol"
      );
    } else if (!emailPattern.test(email)) {
      // Check if email is valid
      alert("Please enter a valid email address.");
    } else {
      window.location.href = "home.html";
    }
  });

// Check the signup form
document
  .getElementById("signup-submit")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get email, username and password from form
    var username = document.getElementById("signup-username").value;
    var password = document.getElementById("signup-password").value;
    var email = document.getElementById("signup-email").value;

    // Create a regular expression for the default values of email and password
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Check for the default value
    if (
      username.trim() === "" ||
      password.trim() === "" ||
      email.trim() === ""
    ) {
      // Display error message
      alert("Please enter email, username and password");
    } else if (password.length < 8 || !passwordRegex.test(password)) {
      // Check if password is at least 8 characters long and contains at least one number and one symbol
      alert(
        "Password must be at least 8 characters long and contain at least one number and one symbol"
      );
    } else if (!emailPattern.test(email)) {
      // Check if email is valid
      alert("Please enter a valid email address.");
    } else {
      window.location.href = "home.html";
    }
  });

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

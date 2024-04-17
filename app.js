const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/index", (req, res) => {
  res.render("index");
});
app.get("/service", (req, res) => {
  res.render("service");
});
app.get("/about", (req, res) => {
  res.render("about");
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: " ",
  database: " ",
});

console.log("Connection:" + connection);

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(__dirname));

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database", err);
  }
  console.log("Connection confirmed");
});

// send signin data to database
app.post("/signSubmit", (req, res) => {
  const password = req.body["password"];
  const name = req.body["username"];
  const email = req.body["email"];
  const query = "INSERT INTO users (email, name, password) VALUES (?,?,?)";

  console.log(email);
  console.log(name);

  if (validate_input_signup(email, name, password)) {
    connection.query(query, [email, name, password], (err, results) => {
      if (err) {
        console.log(err);
      }
    });
    res.redirect("/index");
  } else {
    console.log("Input validation failed");
    res.redirect("/login"); // Redirect back to login page or display an error message
  }
});

// Check for login data from database
app.post("/loginSubmit", (req, res) => {
  const password = req.body["login-password"];
  const name = req.body["login-username"];

  console.log("2");

  // Validate user input
  if (validate_input_login(name, password)) {
    // Pass empty string for email
    // Match input data with the database to check if the user is logged in
    const query = "SELECT * FROM users WHERE name = ? AND password = ?";
    connection.query(query, [name, password], (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error accessing database");
      } else {
        if (results.length > 0) {
          // User is logged in, redirect to index page
          res.redirect("/index");
        } else {
          // User not found
          res.redirect("/index");
        }
      }
    });
  } else {
    // Invalid input, redirect to login page with error message
    res.redirect("/index");
  }
});


//funxtion to validate login and signup forms
function validate_input_signup(email, name, password) {
  console.log(email);
  // Regular expression patterns for validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const namePattern = /^[a-zA-Z0-9]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

  // Check if email is valid
  if (!emailPattern.test(email)) {
    console.log("Invalid email address");
    return false;
  }
  // Check if username is valid
  if (!namePattern.test(name)) {
    console.log("Invalid username");
    return false;
  }
  // Check if password is valid
  if (!passwordPattern.test(password)) {
    console.log(
      "Password must be at least 8 characters long and contain at least one letter and one number"
    );
    return false;
  }
  // All inputs are valid
  return true;
}

function validate_input_login(name, password) {
  // Regular expression patterns for validation
  const namePattern = /^[a-zA-Z0-9]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

  // Check if username is valid
  if (!namePattern.test(name)) {
    console.log("Invalid username");
    return false;
  }
  // Check if password is valid
  if (!passwordPattern.test(password)) {
    console.log(
      "Password must be at least 8 characters long and contain at least one letter and one number"
    );
    return false;
  }
  return true; // All validation checks passed
}

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

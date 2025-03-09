// Register User
function register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userData = {
        name: name,
        email: email,
        password: password
    };


    if(!name|| !email || !password){
        alert("please fill in all the fields");
        return;
    }

    // Check if email is already registered
    if (localStorage.getItem(email)) {
        alert("This email is already registered. Please log in.");
        return; // Prevent storing if already exists
    }

    // Store the user data with email as the key
    localStorage.setItem(email, JSON.stringify(userData));
    alert("Registration Successful! Please sign in.");
    window.location.href = "signin.html"; // Redirect to sign-in page

   
    
}

// Login User
function loginUser(event) {
    event.preventDefault(); // Prevent form submission
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Retrieve the user data using the email as the key
    let storedUser = JSON.parse(localStorage.getItem(email));

    // Check if the stored user exists and if the email and password match
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("loggedInUser", JSON.stringify(storedUser)); // Store login session
        alert("Login successful!");
        window.location.href = "welcome.html"; // Redirect to Welcome page
    } else {
        alert("Invalid email or password!");
    }
}

// Check User on Welcome Page
function checkUser() {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
        alert("Please log in first.");
        window.location.href = "signin.html"; // Redirect to login if not logged in
    } else {
        document.getElementById("userName").innerText = loggedInUser.name;
    }
}

// Logout
function logout() {
    localStorage.removeItem("loggedInUser"); // Remove session
    alert("Logged out successfully!");
    window.location.href = "signin.html"; // Redirect to Sign-In page
}

function check() {
    // (C1) INIT
    var valid = true, error = "", field = "";

    // Full Name Validation
    field = document.getElementById("name");
    error = document.getElementById("nameError");
    


    // Check for empty name
    if (!field.value.trim()) {
        valid = false;
        field.classList.add("err");
        error.innerHTML = "Enter your full name";
    } 
    // Check if name contains numbers
    else if (/\d/.test(field.value)) {
        valid = false;
        field.classList.add("err");
        error.innerHTML = "Name should only contain letters and spaces.";
    } else {
        field.classList.remove("err");
        error.innerHTML = "";
    }

    // Email Validation
    field = document.getElementById("email");
    error = document.getElementById("emailError");
    if (!field.checkValidity()) {
        valid = false;
        field.classList.add("err");
        error.innerHTML = "Enter a valid email address";
    } else {
        field.classList.remove("err");
        error.innerHTML = "";
    }

    // Password Validation
    field = document.getElementById("password");
    error = document.getElementById("passwordError");
    if (!field.checkValidity()) {
        valid = false;
        field.classList.add("err");
        error.innerHTML = "Enter a password";
    } else {
        field.classList.remove("err");
        error.innerHTML = "";
    }

    // Phone Number Validation
    field = document.getElementById("contact");
    error = document.getElementById("contactError");
    if (!field.checkValidity()) {
        valid = false;
        field.classList.add("err");
        error.innerHTML = "Enter a 10-digit phone number";
    } else {
        field.classList.remove("err");
        error.innerHTML = "";
    }

    // Gender Validation
    field = document.getElementById("gender");
    error = document.getElementById("genderError");
    if (!field.value) {
        valid = false;
        field.classList.add("err");
        error.innerHTML = "Select your gender";
    } else {
        field.classList.remove("err");
        error.innerHTML = "";
    }

    // Role Validation (Register As)
    field = document.getElementById("Selectdoctor");
    error = document.getElementById("SelectdoctorError");
    if (!field.value) {
        valid = false;
        field.classList.add("err");
        error.innerHTML = "Select your Doctor";
    } else {
        field.classList.remove("err");
        error.innerHTML = "";
    }

    // Date of Birth Validation
    field = document.getElementById("dob");
    error = document.getElementById("dobError");
    if (!field.value) {
        valid = false;
        field.classList.add("err");
        error.innerHTML = "Enter your date of birth";
    } else {
        field.classList.remove("err");
        error.innerHTML = "";
    }



    // Address Validation
    field = document.getElementById("address");
    error = document.getElementById("addressError");
    if (!field.value.trim()) {
        valid = false;
        field.classList.add("err");
        error.innerHTML = "Enter your address";
    } else {
        field.classList.remove("err");
        error.innerHTML = "";
    }

    // If everything is valid, proceed to next page
    if (valid) {
        window.location.href = "signin.html"; // Redirect to another page
    }

    return false;  // Prevent form submission
}

function togglePassword() {
    let passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
    this.textContent = type === 'password' ? 'Show' : 'Hide'; // Change button text
});


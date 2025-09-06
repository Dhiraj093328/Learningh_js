function validate() {
      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmpassword = document.getElementById("confirmpassword").value.trim();
      const Textarea = document.getElementById("Textarea").value.trim();
      const agree = document.getElementById("agree").checked;
      const gender = document.querySelector('input[name="gender"]:checked');

      // Error spans
      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const phoneError = document.getElementById("phoneError");
      const passwordError = document.getElementById("passwordError");
      const confirmpasswordError = document.getElementById("confirmpasswordError");
      const TextareaError = document.getElementById("TextareaError");
      const agreeError = document.getElementById("agreeError");
      const genderError = document.getElementById("genderError");

      // Clear errors
      nameError.textContent = "";
      emailError.textContent = "";
      phoneError.textContent = "";
      passwordError.textContent = "";
      confirmpasswordError.textContent = "";
      TextareaError.textContent = "";
      agreeError.textContent = "";
      genderError.textContent = "";

      let isValid = true;

      // Validate Name
      if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
      } else if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        isValid = false;
      }

      // Validate Email
      if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
      }

      // Validate Phone
      if (phone === "") {
        phoneError.textContent = "Please enter your phone number.";
        isValid = false;
      } else if (!/^\d{10}$/.test(phone)) {
        phoneError.textContent = "Phone number must be 10 digits.";
        isValid = false;
      }

      // Password Validation
      const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&]{6,}$/;
      if (password === "") {
        passwordError.textContent = "Please enter a password.";
        isValid = false;
      } else if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must have 6+ chars, 1 number & 1 special char.";
        isValid = false;
      }

      // Confirm Password
      if (confirmpassword === "") {
        confirmpasswordError.textContent = "Please confirm your password.";
        isValid = false;
      } else if (confirmpassword !== password) {
        confirmpasswordError.textContent = "Passwords do not match.";
        isValid = false;
      }

      // Gender
      if (!gender) {
        genderError.textContent = "Please select your gender.";
        isValid = false;
      }

      // Agree Checkbox
      if (!agree) {
        agreeError.textContent = "You must agree to the terms & conditions.";
        isValid = false;
      }

      // Textarea
      if (Textarea === "") {
        TextareaError.textContent = "Please enter a message.";
        isValid = false;
      }

      // Show success alert if valid
      if (isValid) {
        const alertBox = document.getElementById("successAlert");
        alertBox.classList.remove("d-none");
        alertBox.textContent = "✅ Form submitted successfully!";
      }

      if (isValid){
        alert("form submitted successfully")
      }

      return isValid; // Prevent submission if invalid
    }
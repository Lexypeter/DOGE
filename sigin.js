document.addEventListener("DOMContentLoaded", function () {
  const signinForm = document.getElementById("signin-form");
  const registerForm = document.getElementById("register-form");
  const formTitle = document.getElementById("form-title");
  const toggleText = document.querySelector(".toggle");
  const wrongMessage = document.querySelector(".wrong");

  function toggleForm() {
      if (signinForm.style.display === "none") {
          signinForm.style.display = "block";
          registerForm.style.display = "none";
          formTitle.innerText = "Sign In";
          toggleText.innerText = "Don't have an account? Register";
      } else {
          signinForm.style.display = "none";
          registerForm.style.display = "block";
          formTitle.innerText = "Register";
          toggleText.innerText = "Already have an account? Sign In";
      }
  }

  // Attach toggle function to the toggleText element
  toggleText.addEventListener("click", toggleForm);

  // Sign In Event Listener
  signinForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      let username = document.querySelector(".username").value.trim();
      let password = document.querySelector(".password").value.trim();

      if (username === "mohammad" && password === "morishi234") {
          wrongMessage.style.color = "green";
          wrongMessage.innerText = "Login successful! Redirecting...";

          setTimeout(() => {
              window.location.href = "dashboard.html"; // Redirect after 2 seconds
          }, 2000);
      } else {
          wrongMessage.innerText = "Invalid username or password!";
      }
  });

  // Register Event Listener (Optional - Add Registration Logic Here)
  registerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Registration successful! You can now sign in.");
      toggleForm(); // Switch back to Sign In form after registration
  });
});

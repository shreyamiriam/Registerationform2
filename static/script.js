document.addEventListener("DOMContentLoaded", () => {
  const formOpenBtn = document.querySelector("#form-open"),
        formContainer = document.querySelector(".form_container"),
        formCloseBtn = document.querySelector(".form_close"),
        loginBtn = document.querySelector("#login"),
        signupBtn = document.querySelector("#signup");

  // Open the form container when "Login" button is clicked
  formOpenBtn.addEventListener("click", () => {
    console.log("Form open button clicked");
    formContainer.classList.add("show"); // Show the form container
  });

  // Close the form container when "X" button is clicked
  formCloseBtn.addEventListener("click", () => {
    console.log("Form close button clicked");
    formContainer.classList.remove("show"); // Hide the form container
  });

  // Switch to signup form when "Signup" button is clicked
  signupBtn.addEventListener("click", (e) => {
    console.log("Signup button clicked");
    e.preventDefault();
    formContainer.classList.add("active"); // Show the signup form
  });

  // Switch to login form when "Login" button is clicked
  loginBtn.addEventListener("click", (e) => {
    console.log("Login button clicked");
    e.preventDefault();
    formContainer.classList.remove("active"); // Show the login form
  });
});





// formOpenBtn.addEventListener("click", () => {
//   console.log("Form open button clicked");
//   home.classList.add("show");
// });

// formCloseBtn.addEventListener("click", () => {
//   console.log("Form close button clicked");
//   home.classList.remove("show");
// });

// signupBtn.addEventListener("click", (e) => {
//   console.log("Signup button clicked");
//   e.preventDefault();
//   formContainer.classList.add("active");
// });

// loginBtn.addEventListener("click", (e) => {
//   console.log("Login button clicked");
//   e.preventDefault();
//   formContainer.classList.remove("active");
// });


// const formOpenBtn = document.querySelector("#form-open"),
//       home = document.querySelector(".home"),
//       formContainer = document.querySelector(".form_container"),
//       formCloseBtn = document.querySelector(".form_close"),
//       signupBtn = document.querySelector("#signup"),
//       loginBtn = document.querySelector("#login"),
//       pwShowHide = document.querySelectorAll(".pw_hide");

// formOpenBtn.addEventListener("click", () => {
//     home.classList.add("show");  // Show the form container
// });

// formCloseBtn.addEventListener("click", () => {
//     home.classList.remove("show");  // Close the form container
// });

// pwShowHide.forEach((icon) => {
//     icon.addEventListener("click", () => {
//         let getPwInput = icon.parentElement.querySelector("input");
//         if (getPwInput.type === "password") {
//             getPwInput.type = "text";
//             icon.classList.replace("uil-eye-slash", "uil-eye");
//         } else {
//             getPwInput.type = "password";
//             icon.classList.replace("uil-eye", "uil-eye-slash");
//         }
//     });
// });

// signupBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     formContainer.classList.add("active");  // Show the signup form
// });

// loginBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     formContainer.classList.remove("active");  // Show the login form
// });



















// const formOpenBtn = document.querySelector("#form-open"),
//   home = document.querySelector(".home"),
//   formContainer = document.querySelector(".form_container"),
//   formCloseBtn = document.querySelector(".form_close"),
//   signupBtn = document.querySelector("#signup"),
//   loginBtn = document.querySelector("#login"),
//   pwShowHide = document.querySelectorAll(".pw_hide");

// formOpenBtn.addEventListener("click", () => home.classList.add("show"));
// formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

// pwShowHide.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     let getPwInput = icon.parentElement.querySelector("input");
//     if (getPwInput.type === "password") {
//       getPwInput.type = "text";
//       icon.classList.replace("uil-eye-slash", "uil-eye");
//     } else {
//       getPwInput.type = "password";
//       icon.classList.replace("uil-eye", "uil-eye-slash");
//     }
//   });
// });

// signupBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   formContainer.classList.add("active");
// });
// loginBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   formContainer.classList.remove("active");
// });
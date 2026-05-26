const name = document.getElementById("name");
const nameLogin = document.getElementById("loginname");
const email = document.getElementById("email");
const emailLogin = document.getElementById("loginemail");
const password = document.getElementById("password");
const passwordLogin = document.getElementById("loginpassword");
const confirmPassword = document.getElementById("confirm_pass");
const errorSignUp = document.getElementById("message-sign-up");
const errorLogin = document.getElementById("message-login");
const submitSignUp = document.getElementById("sign-up-btn");
const submitLogin = document.getElementById("login-btn");
const labels = document.querySelectorAll("label");
const section = document.querySelectorAll("section");
const loginLink = document.getElementById("login_link");
const signupLink = document.getElementById("signup_link");

const all = [name, email, password, confirmPassword];
const allLogin = [nameLogin,emailLogin, passwordLogin];
const allerror = [errorSignUp, errorLogin];

all.forEach((input) => {
    input.addEventListener("input", () => {
        if(name.value.trim() !== "" && email.value.trim() !== "" && password.value.trim() !== "" && confirmPassword.value.trim() !== ""){
            if(password.value !== confirmPassword.value){
                submitSignUp.disabled = true;
                errorSignUp.textContent = "Passwords do not match.";
            } else {
                submitSignUp.disabled = false;
                errorSignUp.textContent = "";
            }
        } else {
            submitSignUp.disabled = true;
            errorSignUp.textContent = "Please fill in all fields.";
        }
    });
});

allLogin.forEach((input) => {
    input.addEventListener("input", () => {
        if(nameLogin.value.trim() !== "" && emailLogin.value.trim() !== "" && passwordLogin.value.trim() !== ""){
            submitLogin.disabled = false;
            errorLogin.textContent = "";
        } else {
            submitLogin.disabled = true;
            errorLogin.textContent = "Please fill in all fields.";
        }
    });
});

allLogin.forEach((input) => {
    input.addEventListener("input", () => {
        if(nameLogin.value.trim() !== "" && emailLogin.value.trim() !== "" && passwordLogin.value.trim() !== ""){
            submitLogin.disabled = false;
            errorLogin.textContent = "";
        } else {
            submitLogin.disabled = true;
            errorLogin.textContent = "Please fill in all fields.";
        }
    });
});

all.forEach((input) => {
    input.addEventListener('focus', () => {
        labels.forEach((label) => {
            if(label.htmlFor === input.id){
                label.style.transform = "translateY(-1rem) translateX(1rem)";
                label.style.backgroundColor = "var(--bg)";
            }
        })
    });
});

all.forEach((input) => {
    input.addEventListener('blur', () => {
        labels.forEach((label) => {
            if(label.htmlFor === input.id){
                if(input.value.trim() === ""){
                    label.style.transform = "";
                    label.style.backgroundColor = "transparent";
                }
            }
        })
    });
});

allLogin.forEach((input) => {
    input.addEventListener('focus', () => {
        labels.forEach((label) => {
            if(label.htmlFor === input.id){
                label.style.transform = "translateY(-1rem) translateX(1rem)";
                label.style.backgroundColor = "var(--bg)";
            }
        })
    });
});

allLogin.forEach((input) => {
    input.addEventListener('blur', () => {
        labels.forEach((label) => {
            if(label.htmlFor === input.id){
                if(input.value.trim() === ""){
                    label.style.transform = "";
                    label.style.backgroundColor = "transparent";
                }
            }
        })
    });
});

loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    section.forEach((sec) => {
        if(sec.id === "login"){
            sec.hidden = false;
        } else {
            sec.hidden = true;
        }
    });
});

signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    section.forEach((sec) => {
        if(sec.id === "signup"){
            sec.hidden = false;
        } else {
            sec.hidden = true;
        }
    });
});

//--------------------------------------//
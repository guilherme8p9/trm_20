const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_pass");
const error = document.getElementById("message");
const submit = document.getElementById("sign");
const all = [name, email, password, confirmPassword];
const labels = document.querySelectorAll("label");

function updateSubmitState(){
    if(!email || !password || !confirmPassword || !name || !submit) return;
    const validEmail = email.value.includes("@") && email.value.includes(".");
    const nameFilled = name.value.trim() !== "";
    const passwordsMatch = password.value === confirmPassword.value;
    const passwordOk = password.value.length >= 6;
    submit.disabled = !(validEmail && nameFilled && passwordsMatch && passwordOk);
}

all.forEach((input) => {
    if(!input) return;
    input.addEventListener('input', () => {
        updateSubmitState();
        labels.forEach((label) => {
            if(label.htmlFor === input.id){
                if(input.onfocus && input.value.trim() === ""){
                    label.style.transform = "";
                    label.style.backgroundColor = "transparent";
                } else {
                    label.style.transform = "translateY(-1rem) translateX(1rem)";
                    label.style.backgroundColor = "var(--bg)";
                }
            }
        })
    });
});
updateSubmitState()

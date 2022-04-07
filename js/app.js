document.addEventListener("DOMContentLoaded", () => {
    console.log(navigator.userAgent);

    let regexMail, passwordUser, warning, email, password, btn;
    
    regexMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    passwordUser = "test234";
    btn = document.getElementById("connexion");

    btn.addEventListener("click", e => {
        e.preventDefault();
        formConnexion();
    });
    
    const formConnexion = () => {

        email = document.getElementById("email").value;
        password = document.getElementById("password").value;
        warning = document.querySelector(".form h2");

        if (email.match(regexMail) && password.match(passwordUser)) {
            warning.classList.remove("warning");
            warning.classList.add("success");
            warning.classList.remove("error");
            warning.innerText = "Connection succeeded";

            localStorage.setItem("user", email);
            sessionStorage.setItem("user", "sessionid");
            localStorage.setItem("password", password);
            sessionStorage.setItem("password", "sessionpassword");

        } else if (!password.match(regexMail)) {
            warning.classList.remove("warning");
            warning.classList.add("error");
            warning.innerText = "Connection failed";
            warning.classList.remove("success");
        };
    };
});
document.addEventListener("DOMContentLoaded", () => {
    console.log(navigator.userAgent);

    let regexMail, regexMdp, warning, email, password, btn;
    
    regexMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    regexMdp = /^[a-zA-Z0-9._-]{2,15}$/;
    warning = document.querySelector(".warning");
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    btn = document.getElementById("connexion");

    btn.addEventListener("click", e => {
        e.preventDefault();
        formConnexion();
    });
    
    const formConnexion = () => {

        if (email.match(regexMail) && password.match(regexMdp)) {
            warning.classList.add("success");
            warning.classList.remove("error");
            warning.innerText = "Connexion réussie";
            console.log(warning);
            localStorage.setItem("user", email);
            sessionStorage.setItem("user", "sessionid");
        } else if (!password.match(regexMail)) {
            warning.classList.add("error");
            warning.innerText = "Mail invalide";
            console.log(warning);
            warning.classList.remove("success");
        };
    };
});
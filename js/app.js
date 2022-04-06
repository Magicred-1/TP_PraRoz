document.addEventListener("DOMContentLoaded", () => {
    console.log(navigator.userAgent);
    
    let regexmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let regexmdp = /^[a-zA-Z0-9._-]{2,15}$/;

    const user = {
        warning: document.querySelector(".form p"),
        email: document.getElementsByTagName("input")[3].value,
        password: document.getElementsByTagName("input")[3].value,
        btn:document.getElementsByTagName("input")[4]
    };

    user.btn.addEventListener("click", e => {
        e.preventDefault();
        formActive();
    });
    
    let formActive = () => {

        if (user.email.match(regexmail) && user.password.match(regexmdp)) {
            user.warning.classList.add("success");
            user.warning.classList.remove("error");
            user.warning.innerText = "Connexion réussie";
            localStorage.setItem("user", email);
            sessionStorage.setItem("user", "sessionid");
        } else if (user.password.match(regexmdp)) {
            user.warning.classList.add("error");
            user.warning.innerText = "Mail invalide";
            user.warning.classList.remove("success");
        } else if (user.email.match(regexmail)) {
            user.warning.classList.add("error");
            user.warning.innerText = "Mot de passe invalide";
            user.warning.classList.remove("success");
        } else {
            user.warning.classList.add("error");
            user.warning.innerText = "Mail ou mot de passe incorrecte";
            user.warning.classList.remove("success");
        };
    };
});
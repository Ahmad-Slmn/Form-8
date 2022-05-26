var password = document.querySelector("form input[type=password]")

document.querySelector("form i").onclick = function () {

    if (password.type === "password") {

        password.type = "text";

        this.className = "far fa-eye";

        this.style.color = "#0095ff"

    } else {
        password.type = "password";
        this.className = "far fa-eye-slash";
        this.style.color = "#fff"
    }
}

document.querySelector("form input[type=checkbox]").onclick = function () {

    if (this.checked === true) {

        document.querySelector("form div p").style.color = "#0095ff"
    } else {
        document.querySelector("form div p").style.color = "#fff"
    }
}

function getpaasword() {
    
    document.querySelector(".box h2 span").textContent = "get password";

    document.querySelector("form:last-of-type").style.left = "21px";

    document.querySelector("form:first-of-type").style.left = "-100%"

}

function log() {
    
    document.querySelector(".box h2 span").textContent = "log in";

    document.querySelector("form:first-of-type").style.left = "21px";

    document.querySelector("form:last-of-type").style.left = "100%"

}

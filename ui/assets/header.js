$("#header").load("header.html");

let login = JSON.parse(localStorage.getItem("IsLoggedIn"));

function isLoggedIn() {
    let content = "";
    if (login == null || login == undefined) { login = false; }
    if (login) {
        content = `
        <a class="navlink" onClick="logout()">logout</a>
        `;
    }
    else {
        content = `
        <a class="navlink" href="login.html">login</a>
        <a class="navlink" href="Register.html">Register</a>
        `;
        localStorage.setItem("IsLoggedIn", false);
    }
    document.querySelector(".navlinks").innerHTML = content;
}

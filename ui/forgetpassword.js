function forgetpassword() {
    event.preventDefault();
    const email = document.querySelector("#Email").value;
    const password = document.querySelector("#password").value;
    const confirmpassword = document.querySelector("#passwordS").value;
    if (password.length < 8) {
        alert("password must be in 8 character");
    }
    else if(password!=confirmpassword){
        alert("password and confirm password is not matched")
    }
    else {
        const data = {
            "Email": email,
            "psw": password,
            "cpsw": confirmpassword
        }
        console.log(data);
        alert("password change successfully");
        window.location.href = "login.html";
    }
}
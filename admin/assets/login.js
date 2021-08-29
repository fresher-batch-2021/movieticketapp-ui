function Login() {
    console.log("hi");
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password1").value;
    console.log(username + "-" + password);
    if (password == null || password.trim() == "") {
      alert("password cannot be blank");
    }
    else {

      UserService.login(username, password).then(res => {
        let data = res.data.docs[0];

        if (data != null) {
          alert("login successful");
          localStorage.setItem("LOGGED_IN_USER", JSON.stringify(data));
          window.location.href = "add-movie.html";
        }
        else {
          alert("login failed");
        }
      }).catch(err => {
        console.error(err);
        alert("unable to login");
      });
    }


  }

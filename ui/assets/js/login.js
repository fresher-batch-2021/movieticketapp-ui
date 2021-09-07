function Login() {
  console.log("hi");
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password1").value;
  console.log(username + "-" + password);
  if (password == null || password.trim() == "") {
   toastr.error(ErrorMessage.PASSWORD_CANNOT_BLANK);
  }
  else {

    UserService.login(username, password).then(res => {
      let data = res.data.docs[0];

      if (data != null) {
        localStorage.setItem("LOGGED_IN_USER", JSON.stringify(data));
        toastr.success("login succesfully");
        setTimeout(function () {
          window.location.href = "movies.html";
        }, 1000)

      }
      else {
        toastr.error(ErrorMessage.INVALID_LOGIN_CREDENTIALS);

      }
    }).catch(err => {
      console.error(err);
      toastr.error("unable to login");
    });
  }


}


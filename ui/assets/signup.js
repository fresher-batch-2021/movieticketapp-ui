function Register(){
    
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const passwordR = document.querySelector("#password-repeat").value;
    console.log(email+"-"+password+"-"+passwordR);
   
    bussinessValidation(email).then(res => {
        console.table(res.data.docs);
        let data = res.data.docs;
        
        if (data != "") {
            alert("email already exist enter different email")
            window.location.reload();
        } 
    // console.log(userobj);
if(password == null  || password.trim()==""){
    alert("password cannot be empty");
}
    else if(password != passwordR){
   alert("password incorrect");
}
else if(password.length < 8)
{
alert("password must be greater than 8 characters");

  }

  else{
    let userobj={
        "email":email,
        "password":password,
        "password-repeat":passwordR
    };
     
      UserService.register(userobj) .then(res =>{
        alert("registration successful");
        window.location.href ="login.html";

    }).catch(err =>{
        console.error(err.response.data);
        alert("unable to register");
    });
  }

    });
}


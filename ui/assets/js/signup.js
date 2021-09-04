function Register(){
    
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const passwordR = document.querySelector("#password-repeat").value;
    
    console.log(email+"-"+password+"-"+passwordR);
   
    bussinessValidation(email).then(res => {
        console.table(res.data.docs);
        let data = res.data.docs;
        
        if (data != "") {
    toastr.warning("email already exist Please enter different email");
    setTimeout(function () {
        
        
      }, 1000);
           return
        } 

if(password == null  || password.trim()==""){
    toastr.error("password cannot be empty");
}
    else if(password != passwordR){
   toastr.error("Password & ConfirmPassword Should Match");
}
else if(password.length < 8)
{
toastr.error("password must be greater than 8 characters");

  }
  
 

  else{
    let userobj={
        "email":email,
        "password":password,
        "password-repeat":passwordR,
        "username":username,
        "role":"USER"
    };
   
      UserService.register(userobj) .then(res =>{
       toastr.success("registration successful")
       setTimeout(function () {
        window.location.href ="login.html";
      }, 2000)
       
       

    }).catch(err =>{
        console.error(err.response.data);
      toastr.error("unable to login");
    });
  }

    });
}


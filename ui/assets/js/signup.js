$(document).ready(function(){
  $("#sign").submit(Register)
})


function Register(){
    
    event.preventDefault();
    const username = $("#username").val();
    const email =$("#email").val(); 
    const password =$("#password").val();
    const passwordR =$("#password-repeat").val();
    
    console.log(email+"-"+password+"-"+passwordR);
   
    bussinessValidation(email).then(res => {
        console.table(res.data.docs);
        let data = res.data.docs;
        
        if (data != "") {
    toastr.error(ErrorMessage.MAIL_ALREADY_EXIST);
    setTimeout(function () {
        
        
      }, 1000);
           return
        } 

if(password == null  || password.trim()==""){
    toastr.error(ErrorMessage.PASSWORD_CANNOT_EMPTY);
}
    else if(password != passwordR){
   toastr.error(ErrorMessage.PASSWORD_CONFIRMPASSWORD_SHOULD_MATCH);
}
else if(password.length < 8)
{
toastr.error(ErrorMessage.PASSWORD_MUST_BE_GREATER_THAN_8_CHARACTERS);

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


// function LoggedIn() {
//     console.log("LoggedIn method ");
//     let login = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));


//     if (login == null || login == undefined)
//      {
//         login = false;
//     }
//     let content = "";
//     if (login) {
//         content = `
//         <a class="si" onClick="logout()">logout</a>
//         `;
//     }
//     else {
//         content = `
//         <a class="si" href="login.html">login</a>
//          <span> | </span>
       
//         `;
//         // localStorage.setItem("LOGGED_IN_USER",JSON.stringify(false));
//     }
//     let navReg = document.querySelector(".navRegister");
//     if (navReg) {

//         navReg.innerHTML = content;
//     }
//     else {
//         console.log("No navReg", navReg);
//     }
// }

// function logout() {
    
//     localStorage.clear();
//     window.location.href = "index.html";
// }


// function loginCheck() {
//     if (JSON.parse(localStorage.getItem("LOGGED_IN_USER")) == null) {
//         alert("need to login first");
//         window.location.href = "login.html";
//         return false;
//     }
// }
// LoggedIn();
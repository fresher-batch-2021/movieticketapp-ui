const routes = [
    { path: "signup.html" },
    { path: "login.html" },
    { path: "index.html" },
    { path: "movies.html"},
    { path: "book.html", roles: ["USER"] },
    { path: "myorders.html", roles: ["USER"] },
    

];

 function logout() {
     localstorage.clear();
     window.Location.href = "login.html";
 }
function checkAccess(pageName, role) {
    let allowed = false;
    for (let route of routes) 
    {
        if (route.path == pageName)
         {
            if (!route.roles) 
            {
                allowed = true;
                break;
            }
            else if (route.roles.includes(role))
             {
                allowed = true;
                break;
            }
        }
    }
    return allowed;
}
(function () {
    console.log("Routes initializing")
    let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
   
    console.log("LoggedIn User", user);
    
    let role = user != null ? user.role : null;
    
    let pathName = window.location.pathname.substr(1);
    console.log(role,pathName)
    let allowedAccess = checkAccess(pathName, role);
   


    if (!allowedAccess) {
       

        window.location.href = "login.html?alert=you are not authorized";
    }
})
();

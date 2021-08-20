// $("#header").load("header.html");
// let login=JSON.parse(localStorage.getItem("IsLoggedIn"));
// function isLoggedIn(){
//     let content="";
    
//     if(login==null||login==undefined){login=false;}
    
//     if(login){
//         content=`
//         <a class="navlink" onClick="logout()">logout</a>
//         `;
//     }
//     else{
//         content=`
//         <a class="navlink" href="login.html">login</a>
//         <a class="navlink" href="Register.html">Register</a>
//         `;
//         localStorage.setItem("IsLoggedIn",false);
//     }
//     document.querySelector(".navlinks").innerHTML=content;
// }
// function logout(){
    
//     localStorage.setItem("IsLoggedIn",false);
//     localStorage.removeItem("cartElements");
//     localStorage.removeItem("totalAmount");
//     window.location.href="index.html";
// }


// function loginCheck(){
    
// if(JSON.parse(localStorage.getItem("IsLoggedIn"))==false){
// alert("can't do that need to login first");
// window.location.href="login.html";
// return false;
// }
// }


// function searchName() {
//     let searchName = document.getElementById("searchBox").value;
//     let myTable = document.getElementById("myTable");
//     let tableRow = myTable.getElementsByTagName("tr");
//     for (var i = 0; i < tableRow.length; i++) {
//         let tableDatas = tableRow[i].getElementsByTagName("td")[1];
//         if (tableDatas) {
//             let textValue = tableDatas.textContent.toLowerCase() || tableDatas.innerText.toLowerCase();
//             if (textValue.indexOf(searchName) > -1) {
//                 tableRow[i].style.display = "";
//             } else {
//                 tableRow[i].style.display = "none";
//             }
//         }
//     }
// }
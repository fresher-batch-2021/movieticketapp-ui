
function Book(){
event.preventDefault();
    let noOfTickets=document.querySelector("#nooftickets").value;

    if(noOfTickets>10){
        alert("cant book more than 10");
        alert(noOfTickets);
        return;
    }
   else if(noOfTickets < 10){
       alert("hihi");
    window.location.href="payment.html";
    }
    

    

}

const param = new URLSearchParams(window.location.search.substr(1));
let movie=param.get("movie");
let theatre=param.get("theatre");
let selectedMovie= movie
let selectedTheatre = theatre;

function showMovies(title){


//movies.html
localStorage.setItem("SELECTED_MOVIE",title);

}

// function showTheatre(name){
//     localStorage.setItem("SELECTED_THEATRE",name);
    
// }





// booking.html

// let selectedTheatre = localStorage.getItem("SELECTED_THEATRE");


let content=`
<table>
<tr>
<th>movie</th>
 <th>theatre</th>
</tr>
<tr>
<td>${selectedMovie}</td>
 <td>${selectedTheatre}</td>
</tr>
</table>
`;
document.querySelector(".tablePage").innerHTML=content;

function setData(){
    let today = new Date().toJSON().substr(0,10);
    let tomorrow = new Date().toJSON().substr(0,10);
    document.querySelector("#date").setAttribute("min",today);
    document.querySelector("#date").setAttribute("max", tomorrow);
}
setData();

function Book(){
event.preventDefault();
    let noOfTickets=document.querySelector("#nooftickets").value;
    let date=document.querySelector("#date").value;
    let time=document.querySelector("#time").value;
    if(noOfTickets>10){
        alert("cant book more than 10");
        alert(noOfTickets);
        return;
    }
   else if(noOfTickets < 10){
       alert("hihi");
       
    //    localStorage.setItem("movieData",JSON.stringify(movieData));
    localStorage.setItem("noOfTickets",noOfTickets);
    localStorage.setItem("date",date);
    localStorage.setItem("time",time);
    localStorage.setItem("movie",movie);
    window.location.href="payment.html";
    }
    

    

}

const param = new URLSearchParams(window.location.search.substr(1));
let movie=param.get("movie");
let theatre=param.get("theatre");
let selectedMovie= movie
let selectedTheatre = theatre;



let content=`

<table>
<tr>
<th>movie</th>

</tr>
<tr>
<td>${selectedMovie}</td>

</tr>
</table>
`;
{/* <td>${selectedTheatre}</td> */}
{/* <th>theatre</th> */}

document.querySelector(".tablePage").innerHTML=content;


// function showTheatre(name){
//     localStorage.setItem("SELECTED_THEATRE",name);
    
// }





// booking.html

// let selectedTheatre = localStorage.getItem("SELECTED_THEATRE");


// document.querySelector("#list-movie").innerHTML=table;

function setData(){
    let today = new Date().toJSON().substr(0,10);
    let day =dayjs().add(8,'days').toDate().toJSON().substr(0,10);
    console.log(day);
    document.querySelector("#date").setAttribute("min",today);
    document.querySelector("#date").setAttribute("max",day);
}
setData();
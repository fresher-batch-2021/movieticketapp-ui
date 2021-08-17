// function ticket(){
//     let x=logincheck();
//     if(x==false)return;
// }
// ticket();

const param = new URLSearchParams(window.location.search.substr(1));
let movie=param.get("movie");
let theatre=param.get("theatre");
let selectedMovie= movie
let selectedTheatre = theatre;
function showMovies(title){


//movies.html
localStorage.setItem("SELECTED_MOVIE",title);

}

function showTheatre(name){
    localStorage.setItem("SELECTED_THEATRE",name);
    
}




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


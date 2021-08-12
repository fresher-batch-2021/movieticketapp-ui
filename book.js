let selectedMovie= localStorage.getItem("SELECTED_MOVIE");

function showMovies(title){


//movies.html
localStorage.setItem("SELECTED_MOVIE",title);

}

function showTheatre(name){
    localStorage.setItem("SELECTED_THEATRE",name);

}



// booking.html

let selectedTheatre = localStorage.getItem("SELECTED_THEATRE");


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



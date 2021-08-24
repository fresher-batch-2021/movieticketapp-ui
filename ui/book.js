
function price(movieId) {
    const dbUsername = 'apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
    const dbPassword = 'e455d34a303110b468819fbc14388b5e';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
    const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_movies/"+ movieId;
    axios.get(url, { headers: { Authorization: basicAuth } }).then(res => {
        console.log(res.data)
        let movie = res.data;
        document.querySelector("#movieId").value = movie._id;
        document.querySelector("#movieName").value = movie.title;
        document.querySelector("#price").value = movie.price;

        //   movies=movies.map((obj)=>obj.doc);
    })
        .catch(err => {
            console.error(err);
        });
}


function Book() {
    event.preventDefault();
    // let movies = document.querySelector("#title").value;
    let noOfTickets = document.querySelector("#nooftickets").value;
    let date = document.querySelector("#date").value;
    let time = document.querySelector("#time").value;
    let price = document.querySelector("#price").value;

    let movieId = document.querySelector("#movieId").value;
    let movieName = document.querySelector("#movieName").value;
    //todo
    //get movie id and movie name

    if (noOfTickets > 10) {
        alert("cant book more than 10");
        alert(noOfTickets);
        return;
    }
    else if (noOfTickets < 10) {
        

        let Obj={
            "movieId" : movieId,
            "movieName": movieName,
            "ticket":noOfTickets,
            "date":date,
            "time":time,
            "price":price,
            "status":"Booked"
        }
        console.log(Obj);
        
        //    localStorage.setItem("movieData",JSON.stringify(movieData));
        // localStorage.setItem("noOfTickets", noOfTickets);
        // localStorage.setItem("date", date);
        // localStorage.setItem("time", time);
        // localStorage.setItem("movie", movie);
        const dbUsername = 'apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
        const dbPassword = 'e455d34a303110b468819fbc14388b5e';
        const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
        const url="https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_booking"
        axios.post(url,Obj,{ headers: { Authorization: basicAuth } }).then(res=>console.log(res.data)).catch(err=>console.error(err))
         alert("booked successfully")
        window.location.href = "index.html";
    }

}


const param = new URLSearchParams(window.location.search.substr(1));
let movie = param.get("movie");
let theatre = param.get("theatre");
let selectedMovie = movie
let selectedTheatre = theatre;
let selectedMovieId = param.get("id");

price(selectedMovieId);


let content = `

<table>
<tr>
<th>movie</th>

</tr>
<tr>
<td>${selectedMovie}</td>

</tr>
</table>
`;
{/* <td>${selectedTheatre}</td> */ }
{/* <th>theatre</th> */ }

document.querySelector(".tablePage").innerHTML = content;


// function showTheatre(name){
//     localStorage.setItem("SELECTED_THEATRE",name);

// }





// booking.html

// let selectedTheatre = localStorage.getItem("SELECTED_THEATRE");


// document.querySelector("#list-movie").innerHTML=table;

function setData() {
    let today = new Date().toJSON().substr(0, 10);
    let day = dayjs().add(8, 'days').toDate().toJSON().substr(0, 10);
    console.log(day);
    document.querySelector("#date").setAttribute("min", today);
    document.querySelector("#date").setAttribute("max", day);
}
setData();
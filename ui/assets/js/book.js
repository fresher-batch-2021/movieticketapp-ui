log();
function price(movieId) {
    BookService.priceService(movieId).then(res => {
        console.log(res.data)
        let movie = res.data;
        document.querySelector("#movieId").value = movie._id;
        document.querySelector("#movieName").value = movie.title;
        document.querySelector("#price").value = movie.price;
    })
        .catch(err => {
            console.error(err);
        });
}


function Book() {
    event.preventDefault();
    
    let noOfTickets = document.querySelector("#nooftickets").value;
    let date = document.querySelector("#date").value;
    let time = document.querySelector("#time").value;
    let price = document.querySelector("#price").value;
    let movieId = document.querySelector("#movieId").value;
    let movieName = document.querySelector("#movieName").value;
    let email = JSON.parse(localStorage.getItem("LOGGED_IN_USER")).email;
    let theatreName = document.querySelector("#theatreName").value;
    //todo
    //get movie id and movie name

    if (noOfTickets > 10) {
        alert("cant book more than 10");
        alert(noOfTickets);
        return;
    }
    else if (noOfTickets < 10) {


        
  BookService.bookTable(movieId, movieName, noOfTickets, theatreName, date, time, price, email).then(res => console.log(res.data)).catch(err => console.error(err))
        alert("booked successfully")
        window.location.href = "index.html";
    }

}
const param = new URLSearchParams(window.location.search.substr(1));
let movie = param.get("movie");
console.log("select movie +++", movie);
let theatre = param.get("theatre");
let selectedMovie = movie;
console.log("select movie ----", selectedMovie);
let selectedTheatre = theatre;
let selectedMovieId = param.get("id");

price(selectedMovieId);


let content = `

<table>
<tr>
<th>movie</th>
</tr>
<tr>
// <td>${selectedMovie}</td>
</tr>
</table>
`;


console.log(content)
// booking.html
function setData() {
    let today = new Date().toJSON().substr(0, 10);
    let day = dayjs().add(8, 'days').toDate().toJSON().substr(0, 10);
    console.log(day);
    document.querySelector("#date").setAttribute("min", today);
    document.querySelector("#date").setAttribute("max", day);
}
setData();
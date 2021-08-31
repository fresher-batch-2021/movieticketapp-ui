/**
 * This function in used to get the price from database
 * @param {string} movieId 
 */
function price(movieId) {
    BookService.priceService(movieId).then(res => {
        console.log(res.data)
        let movie = res.data;
        document.querySelector("#movieId").value = movie._id;
        document.querySelector("#movieName").value = movie.title;

    })
        .catch(err => {
            console.error(err);
        });
}
/**
 * This function is used to get theatre value from database
 */
function theatre() {
    BookService.theatreService().then(res => {

        let theatres = res.data.rows.map(obj => obj.doc);
        console.table(theatres);
        localStorage.setItem("THEATRES", JSON.stringify(theatres));
        let content = "<option disabled>--SELECT--</option>";
        for (let theatre of theatres) {
            content += `<option value="${theatre.theatreName}"> ${theatre.theatreName}</option>`;
        }
        document.querySelector("#theatreName").innerHTML = content;
        getSeats();
    })
        .catch(err => {
            console.error(err);
        })
} theatre();

/**
 * This function is to get seat value and display from theatre values
 */
function getSeats() {
    let theatres = JSON.parse(localStorage.getItem("THEATRES"));
    let selectedTheatreName = document.querySelector("#theatreName").value;
    let selectedTheatreObj = theatres.find(obj => obj.theatreName == selectedTheatreName);
    console.log(selectedTheatreObj);
    let noOfSeats = 0;
    if (selectedTheatreObj != null) {
        document.querySelector("#price").value = selectedTheatreObj.price;
        document.querySelector("#time").value = selectedTheatreObj.time;
        noOfSeats = selectedTheatreObj.noOfTickets;

        //load timings
        for (let theatre of theatres) {
            console.log(selectedTheatreName,theatre.theatreName);
            if (theatre.theatreName == selectedTheatreName) {
                console.log(theatre.time)
                content += `<option value="${theatre.time[0]}"> ${theatre.time[0]}</option>
                <option value="${theatre.time[1]}"> ${theatre.time[1]}</option>`;
            }
        }
        document.querySelector("#time").innerHTML = content;
content='';
    }
    console.log("No of seats:", noOfSeats);
    document.querySelector("#availableSeats").value = noOfSeats;

    //load timimgs


    //return noOfSeats;
}

/**
 * This function is used to choose date
 */
function chooseDate() {
  
    let selectedTheatre = document.querySelector("#theatreName").value;
    let selectedDate = document.querySelector("#date").value;
  
    seatsQuantity(selectedTheatre, selectedDate).then(res => {
        let totalBookedTickets = res;
        console.log("totalbooked tickets:", totalBookedTickets);
        getSeats();
        document.querySelector("#noofticketsbooked").value = totalBookedTickets;
    })
}
/**
 * This function is used to 
 * @param {} theatreName 
 * @param {*} showDate 
 * @returns 
 */
async function seatsQuantity(theatreName, showDate) {
    let criteria = {
        "selector": {
            "theatreName": theatreName,
            "date": showDate,
            "status": "Booked"
        },
        "fields": ["ticket"]

    }
    let { data } = await BookService.quantity(criteria);
    let results = data.docs;
    console.log(data);
    let totalBookedTickets = 0;
    for (let obj of results) {
        totalBookedTickets = totalBookedTickets + parseInt(obj.ticket);
    }
    console.log("TotalBookedTickets", totalBookedTickets);
    return totalBookedTickets;
    // let noOfTickets=availableseats-totalBookedTickets;

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

    if (noOfTickets > 100) {
        alert("cant book more than 10");
        alert(noOfTickets);
        document.querySelector("#nooftickets").value;
        return;
    }
    else {
        let noofticketsbooked = document.querySelector("#noofticketsbooked").value;
        let totalSeats = document.querySelector("#availableSeats").value;
        let availableSeats = totalSeats - noofticketsbooked;

        console.log(availableSeats);
        if (noOfTickets > availableSeats) {
            alert("insuffient seats, No of seats available: " + availableSeats);
            return;
        }




        BookService.bookTable(movieId, movieName, noOfTickets, theatreName, date, time, price, email).then(res => console.log(res.data)).catch(err => console.error(err))
        alert("booked successfully")
        window.location.href = "index.html";
    }


}
const param = new URLSearchParams(window.location.search.substr(1));
let movie = param.get("movie");
console.log("select movie +++", movie);
// let theatre = param.get("theatre");
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
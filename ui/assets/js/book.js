$("#bookSubmit").submit(Book);

/**
 * This function in used to get the moviename from database
 * @param {string} movieId 
 */
function price(movieId) {
    BookService.priceService(movieId).then(res => {
        console.log(res.data)
        let movie = res.data;
        $("#movieId").val(movie._id);
        $("#movieName").val(movie.title);

    })
        .catch(err => {
            console.error(err);
        });
}
/**
 * This function is used to get theatre value from database and display a value
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
        $("#theatreName").html(content);
        getSeats();
    })
        .catch(err => {
            console.error(err);
        })
} theatre();
$("#theatreName").change(getSeats);

/**
 * This function is to get seat value and display from theatre values
 */
function getSeats() {
    const theatres = JSON.parse(localStorage.getItem("THEATRES"));
    const selectedTheatreName = $("#theatreName").val();
    const selectedTheatreObj = theatres.find(obj => obj.theatreName == selectedTheatreName);
    const selectedTheatreTime = $("#time").val();
    console.log(selectedTheatreTime, "yes")

    console.log("selectedTheatreTime:", selectedTheatreTime);

    let noOfSeats = 0;
    if (selectedTheatreObj != null) {

        if (selectedTheatreTime != '' || selectedTheatreTime == '') {
            displayShowTimings(selectedTheatreObj);
        }

        $("#price").val(selectedTheatreObj.price);


        noOfSeats = selectedTheatreObj.noOfTickets;




    }


    $("#availableSeats").val(noOfSeats);


    //load timimgs


    //return noOfSeats;
}
/**
 * Display Theatre Timing Options
 * @param {string} selectedTheatreObj 
 */
function displayShowTimings(theatreObj) {
    console.group("Display Show Timings");
    console.log(theatreObj);
    let selectedDateStr = $("#date").val();

    let content = "";

    let theatreObject = new Theatre({ timings: theatreObj.time });
    let availableTimings = theatreObject.getTimings(selectedDateStr);

    console.log("AvailableTimings:", availableTimings);

    for (let showtime of availableTimings) {

        content += `<option  value="${showtime}">${showtime}</option>`;
    }


    $("#time").html(content);
    console.groupEnd();

}
$("#date").change(chooseDate);

/**
 * This function is used to choose date
 */
function chooseDate() {

    console.group("Choose Date");
    let selectedTheatre = $("#theatreName").val();
    let selectedDate = $("#date").val();
    let selectedTime = $("#time").val();
    console.log(selectedTheatre, selectedDate, selectedTime)
    seatsQuantity(selectedTheatre, selectedDate, selectedTime).then(res => {
        let totalBookedTickets = res;
        console.log("totalbooked tickets:", totalBookedTickets);
        getSeats();
        $("#noofticketsbooked").val(totalBookedTickets);
    })
    let theatres = JSON.parse(localStorage.getItem("THEATRES"));
    let selectedTheatreName = $("#theatreName").val();
    let selectedTheatreObj = theatres.find(obj => obj.theatreName == selectedTheatreName);
    //displayShowTimings(selectedTheatreObj);
    console.groupEnd("Choose Date");
}
/**
 * This function is used to select the date and time criteria
 * @param {} theatreName 
 * @param {*} showDate 
 * @returns 
 */
async function seatsQuantity(theatreName, showDate, showTime) {

    let criteria = {
        "selector": {
            "theatreName": theatreName,
            "date": showDate,
            "time": showTime,
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


}
/**
 * This function is used to get the values 
 * @returns 
 */

function Book() {

    event.preventDefault();

    let noOfTickets = $("#nooftickets").val();
    let movieDate = $("#date").val();
    let movieTime = $("#time").val();
    let ticketPrice = $("#price").val();
    let movieId = $("#movieId").val();
    let movieName = $("#movieName").val();
    let email = JSON.parse(localStorage.getItem("LOGGED_IN_USER")).email;
    let theatreName = $("#theatreName").val();
    let today = new Date().toJSON();
    //get movie id and movie name

    if (noOfTickets > 100) {
        toastr.error(ErrorMessage.CANT_BOOK_MORE_THAN_10);
    }
    else if (noOfTickets <= 0) {
        toastr.error(ErrorMessage.ENTER_VALID_SEAT);
    }
    else {
        let noofticketsbooked = $("#noofticketsbooked").val();
        let totalSeats = $("#availableSeats").val();
        let availableSeats = totalSeats - noofticketsbooked;
        console.log(availableSeats);
        if (noOfTickets > availableSeats) {
            toastr.error(ErrorMessage.INSUFFICIENT_SEATS + availableSeats);
            return;
        }
        BookService.bookTable(movieId, movieName, noOfTickets, theatreName, movieDate, movieTime, ticketPrice, email, today).then(res => console.log(res.data)).catch(err => console.error(err))
        toastr.success("booked successfully");
        setTimeout(function () {
            window.location.href = "index.html";
        }, 1000)

    }


}

/**
 * This variable is used to get the values from url
 */
const param = new URLSearchParams(window.location.search.substr(1));
let movie = param.get("movie");
console.log("select movie +++", movie);

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
/**
 * this function is used for day js
 */
function setData() {
    let today = new Date().toJSON().substr(0,10);
    let day = dayjs().add(8, 'days').toDate().toJSON().substr(0, 10);
    console.log(day);
    $("#date").attr("min", today);
    $("#date").attr("max", day);
}
setData();



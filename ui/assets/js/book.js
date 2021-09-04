/**
 * This function in used to get the moviename from database
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
    let selectedTheatreTime = document.querySelector("#time").value;
    console.log(selectedTheatreTime, "yes")

    console.log("selectedTheatreTime:", selectedTheatreTime);

    let noOfSeats = 0;
    if (selectedTheatreObj != null) {

        if (selectedTheatreTime == '') {
            displayShowTimings(selectedTheatreObj);
        }

        document.querySelector("#price").value = selectedTheatreObj.price;


        noOfSeats = selectedTheatreObj.noOfTickets;
        //load timings
       


    }


    document.querySelector("#availableSeats").value = noOfSeats;


    //load timimgs


    //return noOfSeats;
}

/**
 * Display Theatre Timing Options
 * @param {string} selectedTheatreObj 
 */
function displayShowTimings(theatreObj) {

    for (let showtime of theatreObj.time) {
        content += `<option  value="${showtime}">${showtime}</option>`;
    }

    console.log("Insert time options")
    document.querySelector("#time").innerHTML = content;

}

/**
 * This function is used to choose date
 */
function chooseDate() {

    let selectedTheatre = document.querySelector("#theatreName").value;
    let selectedDate = document.querySelector("#date").value;
    let selectedTime = document.querySelector("#time").value;
    console.log(selectedTheatre, selectedDate, selectedTime)
    seatsQuantity(selectedTheatre, selectedDate, selectedTime).then(res => {
        let totalBookedTickets = res;
        console.log("totalbooked tickets:", totalBookedTickets);
        getSeats();
        document.querySelector("#noofticketsbooked").value = totalBookedTickets;
    })



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
    let noOfTickets = document.querySelector("#nooftickets").value;
    let date = document.querySelector("#date").value;
    let time = document.querySelector("#time").value;
    let price = document.querySelector("#price").value;
    let movieId = document.querySelector("#movieId").value;
    let movieName = document.querySelector("#movieName").value;
    let email = JSON.parse(localStorage.getItem("LOGGED_IN_USER")).email;
    let theatreName = document.querySelector("#theatreName").value;
    let today = new Date().toJSON().substr(0, 10);
    // let now = JSON.parse(localStorage.getItem("currentTime")).now;
    


   
    //get movie id and movie name

    if (noOfTickets > 10) {
        toastr.error("cant book more than 10");
    }
    else if(noOfTickets <= 0){
        toastr.error("enter valid seat");  
    }
    else {
        let noofticketsbooked = document.querySelector("#noofticketsbooked").value;
        let totalSeats = document.querySelector("#availableSeats").value;
        let availableSeats = totalSeats - noofticketsbooked;

        console.log(availableSeats);
        if (noOfTickets > availableSeats) {
            toastr.warning("insuffient seats, No of seats available: " + availableSeats);
            return;
        }
        BookService.bookTable(movieId, movieName, noOfTickets, theatreName, date, time, price, email, today).then(res => console.log(res.data)).catch(err => console.error(err))
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
    let today = new Date().toJSON().substr(0, 10);
    let day = dayjs().add(8, 'days').toDate().toJSON().substr(0, 10);
    console.log(day);
    document.querySelector("#date").setAttribute("min", today);
    document.querySelector("#date").setAttribute("max", day);
}
setData();
function bookingTime(){
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = (hour >= 12)? " PM ":" AM ";
    hour = (hour >= 12)? hour - 12: hour;
    if (hour===0 && prepand===' PM ') 
    { 
    if (minute===0 && second===0)
    { 
    hour=12;
    prepand=' Noon';
    } 
    else
    { 
    hour=12;
    prepand=' PM';
    } 
    } 
    if (hour===0 && prepand===' AM ') 
    { 
    if (minute===0 && second===0)
    { 
    hour=12;
    prepand=' Midnight';
    } 
    else
    { 
    hour=12;
    prepand=' AM';
    } 
    } 
    let now ="Current Time : "+hour + prepand + " : " + minute;
  console.log(now );
//   localStorage.setItem("currentTime", JSON.stringify(now));

//   let getTime= document.querySelector("#bookTime").value ;
  
}bookingTime();


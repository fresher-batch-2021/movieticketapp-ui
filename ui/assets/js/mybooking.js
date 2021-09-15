

let userStr = JSON.parse(localStorage.getItem("LOGGED_IN_USER")).email;
const hari = (userStr)
function formMovieTableData() {

    let content = "";
    let i = 1;
    BookService.booking().then(res => {
        let details = res.data.docs;
        console.log(details);
        
        for (let Obj of details) {
            $("#list-movie tbody").empty();
            let orderedDate = new Date(Obj.movieDate).toJSON(); //.substr(0, 10);
            let date = moment(new Date(orderedDate)).format("DD-MM-YYYY");
            console.log(Obj.bookingDate);
            let bookingDate  = moment(Obj.bookingDate).format("DD-MM-YYYY");
            let cancelBook = `<button type='button'  onclick = "cancelBooking('${Obj._id}','${Obj._rev}','${Obj.movieId}','${Obj.movieName}','${Obj.theatreName}','${Obj.noOfTickets}','${Obj.movieDate}','${Obj.movieTime}','${Obj.ticketPrice}','cancel','${Obj.email}');"> Cancel </button>`;

            const abc = (Obj.noOfTickets) * (Obj.ticketPrice);

            content += `<tr>
        <td>${i++}</td>
        <td>${Obj.movieName}</td>
        <td>${Obj.noOfTickets}</td>
        <td>${Obj.theatreName}</td>
        <td>${date}</td>
        <td>${Obj.movieTime}</td>
        
        <td>&#8377;${abc}</td>
        <td>${bookingDate}</td>

        <td>${Obj.status}</td>
        <td>`;
            if (Obj.status == 'Booked') {
                let bookingDate = moment(Obj.movieDate).format("MM-DD-YYYY");
                let timeArray = Obj.movieTime.split(":");
                let dateString = bookingDate+" "+ timeArray[0]+":"+timeArray[1];
                console.log(dateString);
                if(Date.parse(dateString) < Date.parse(new Date())){
                    console.log("ok");
                    content += `Expired`;
                }else{
                content += `${cancelBook}`;
            }
            }
            content += `     
        
    
         </td></tr>
        `

        $("#list-movie tbody").append(content);

        }
    }).catch(err => {
        console.error(err)
        console.log(content);
    });

}
formMovieTableData();






function cancelBooking(id, rev, movieId, movieName, theatreName,noOfTickets, movieDate, movieTime, ticketPrice, status, email) {
    Swal.fire({
        title: 'Are you sure?',
        text: "Do You want to cancel this booking",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Cancel it!',
    })
        .then(result => {
            if (result.isConfirmed) {
                BookService.cancel(id, rev, movieId, movieName, theatreName, noOfTickets, movieDate, movieTime, ticketPrice, status, email)
                    .then(res => {
                        Swal.fire(
                            'Cancelled!',
                            'Your Movie has been Cancelled.',
                            'success',
                            setTimeout (function(){
                                window.location.reload()
                            },1000)
                          
                        )
                    })
            }


        }).catch(err => {
            toastr.error("error in deleting");

        })

}
function searchName() {
    let searchName = $("#searchBox").val().toLowerCase();
    let myTable = $("#list-movie");
   
  
    $("#list-movie tbody tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(searchName) > -1)
    });
}


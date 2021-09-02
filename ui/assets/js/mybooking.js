

let userStr = JSON.parse(localStorage.getItem("LOGGED_IN_USER")).email;
const hari = (userStr)
function formMovieTableData() {

    let content = "";
    let i = 1;
    BookService.booking().then(res => {
        let details = res.data.docs;
        console.log(details);
        for (let Obj of details) {
            let orderedDate = new Date(Obj.date).toJSON(); //.substr(0, 10);
            let date = moment(new Date(orderedDate)).format("DD-MM-YYYY");

            let cancelBook = `<button type='button'  onclick = "cancelBooking('${Obj._id}','${Obj._rev}','${Obj.movieId}','${Obj.movieName}','${Obj.theatreName}','${Obj.ticket}','${Obj.date}','${Obj.time}','${Obj.price}','cancel','${Obj.email}');"> Cancel </button>`;

            const abc = (Obj.ticket) * (Obj.price);

            content += `<tr>
        <td>${i++}</td>
        <td>${Obj.movieName}</td>
        <td>${Obj.ticket}</td>
        <td>${Obj.theatreName}</td>
        <td>${date}</td>
        <td>${Obj.time}</td>
        
        <td>${abc}</td>
        <td>${moment(Obj.today).format("DD-MM-YYYY")}</td>

        <td>${Obj.status}</td>
        <td>`;
            if (Obj.status == 'Booked') {
                content += `${cancelBook}`;
            }
            content += `     
        
    
         </td></tr>
        `

            document.querySelector("#list-movie").innerHTML = content;
        }
    }).catch(err => {
        console.error(err)
        console.log(content);
    });

}
formMovieTableData();






function cancelBooking(id, rev, movieId, movieName, theatreName, ticket, date, time, price, status, email) {
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
                BookService.cancel(id, rev, movieId, movieName, theatreName, ticket, date, time, price, status, email)
                    .then(res => {
                        Swal.fire(
                            'Cancelled!',
                            'Your Movie has been Cancelled.',
                            'success',
                            window.location.reload()
                        )
                    })
            }


        }).catch(err => {
            toastr.error("error in deleting");

        })

}
function searchName() {
    let searchName = document.getElementById("searchBox").value;
    let myTable = document.getElementById("myTable");
    let tableRow = myTable.getElementsByTagName("tr");
    for (var i = 0; i < tableRow.length; i++) {
        let tableDatas = tableRow[i].getElementsByTagName("td")[1];
        if (tableDatas) {
            let textValue = tableDatas.textContent.toLowerCase() || tableDatas.innerText.toLowerCase();
            if (textValue.indexOf(searchName) > -1) {
                tableRow[i].style.display = "";
            } else {
                tableRow[i].style.display = "none";
            }
        }
    }
}


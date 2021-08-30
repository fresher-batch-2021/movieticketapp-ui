log();

let userStr = JSON.parse(localStorage.getItem("LOGGED_IN_USER")).email;
const hari = (userStr)
function formMovieTableData() {

    let content = "";
    let i = 1;
    BookService.booking().then(res => {
        let details = res.data.docs;
        console.log(details);
        for (let Obj of details) {

            let cancelBook = `<button type='button'  onclick = "cancelBooking('${Obj._id}','${Obj._rev}','${Obj.movieId}','${Obj.movieName}','${Obj.theatreName}','${Obj.ticket}','${Obj.date}','${Obj.time}','${Obj.price}','cancel','${Obj.email}');"> Cancel </button>`;

            const abc = (Obj.ticket) * (Obj.price);

            content += `<tr>
        <td>${i++}</td>
        <td>${Obj.movieName}</td>
        <td>${Obj.ticket}</td>
        <td>${Obj.theatreName}</td>
        <td>${Obj.date}</td>
        <td>${Obj.time}</td>
        
        <td>${abc}</td>
        <td>${new Date().toJSON().substr(0, 10)}</td>

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
    alert("Do you want to cancel this booking?");

    BookService.cancel(id, rev, movieId, movieName, theatreName, ticket, date, time, price, status, email).then(res => {
        alert("Deleted succesfully");
        window.location.reload();

    }).catch(err => {
        alert("error in deleting");

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


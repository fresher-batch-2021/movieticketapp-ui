/**
 * This function displays the list registered user from database
 */
function listUser() {

    UserService.getUsers().then(res => {
        console.log(res.data)
        let x=res.data;
        console.table(x.docs)
        // let data= x.map(obj => obj.doc);
        // console.log(data)

        // console.log(data);
        formRegisterTableData(x.docs);
    }).catch(err => {
        console.log(err);
        console.log("Unable to fetch data");
    });
/**
 * This function is used to display the data in table format
 * @param {*} users 
 */

    function formRegisterTableData(users) {


        let content = "";
        let i = 1;
        for (let listUser of users) {
          
                let orderedDate = new Date(listUser.date).toJSON(); //.substr(0, 10);
                let date = moment(new Date(orderedDate)).format("DD-MM-YYYY");
            content +=
                `<tr>
            <td> ${i++} </td> 
            <td>${listUser.email}</td>
            <td>${listUser.movieName}</td>
            <td>${moment(listUser.bookingDate).format("DD-MM-YYYY")}</td>
            <td>${listUser.time}</td>
            <td>${date}</td>
            <td>${listUser.status}</td>
            <td>${listUser.ticket}</td>
            <td>${listUser.theatreName}</td>

           `;
            let details = listUser.myBooking
            console.table(details);


        } content += `</tr>`



        document.querySelector("#list-user").innerHTML = content;
    }
}
listUser();
/**
 * This function is used to search by email
 */
function searchEmail() {
    let searchEmail = document.getElementById("searchBox").value;
    let myTable = document.getElementById("myTable");
    let tableRow = myTable.getElementsByTagName("tr");
    for (var i = 0; i < tableRow.length; i++) {
        let tableDatas = tableRow[i].getElementsByTagName("td")[1];
        if (tableDatas) {
            let textValue = tableDatas.textContent.toLowerCase() || tableDatas.innerText.toLowerCase();
            if (textValue.indexOf(searchEmail) > -1) {
                tableRow[i].style.display = "";
            } else {
                tableRow[i].style.display = "none";
            }

        }
    }
}
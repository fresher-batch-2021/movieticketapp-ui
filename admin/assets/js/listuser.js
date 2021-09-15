/**
 * This function displays the list registered user from database
 */
function listUser() {

    UserService.getUsers().then(res => {
        console.log(res.data)
        let x=res.data;
        console.table(x.docs)
        
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
        $("#list tbody").empty();
        for (let listUser of users) {
          
                let orderedDate = new Date(listUser.movieDate).toJSON(); //.substr(0, 10);
                let date = moment(new Date(orderedDate)).format("DD-MM-YYYY");
            content +=
                `<tr>
            <td> ${i++} </td> 
            <td>${listUser.email}</td>
            <td>${listUser.movieName}</td>
            <td>${moment(listUser.bookingDate).format("DD-MM-YYYY")}</td>
            <td>${listUser.movieTime}</td>
            <td>${date}</td>
            <td>${listUser.status}</td>
            <td>${listUser.noOfTickets}</td>
            <td>${listUser.theatreName}</td>

           `;
            let details = listUser.myBooking
            console.table(details);


        } content += `</tr>`



       $("#list tbody").append(content);
    }
}
listUser();
/**
 * This function is used to search by email
 */
function searchEmail() {
    let searchEmail =$("#searchBox").val().toLowerCase();
    let myTable =$("#list");
$("#list tbody tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(searchEmail) > -1)

});
}
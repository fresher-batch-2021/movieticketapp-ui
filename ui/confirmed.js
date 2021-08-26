// log();

let userStr = JSON.parse(localStorage.getItem("LOGGED_IN_USER")).email;
const hari = (userStr)
console.log("hari" + hari);
// let user = userStr != null ? JSON.parse(userStr) : [];
// console.log("email validate", user.email);

// if(user.email != null)
// {

// }
// else
// {
//     alert("need to login first");
//     window.location.href = "login.html";
// }

function formMovieTableData() {

    let content = "";
    let i = 1;

    const dbUsername = 'apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
    const dbPassword = 'e455d34a303110b468819fbc14388b5e';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
    const endpoint = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_booking/";


    let userData = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));

    const url = endpoint + '_find';

    const requestData = {
        selector: {
            email: userData.email

        },
        fields: ["_id", "_rev", "movieName", "ticket", "date", "time", "price", "status", "theatreName","email"]
    };

    axios.post(url, requestData, { headers: { Authorization: basicAuth } }).then(res => {



        let details = res.data.docs;
        console.log(details);
        for (let Obj of details) {

            let cancelBook = `<button type='button'  onclick = "cancel_booking('${Obj._id}','${Obj._rev}','${Obj.movieId}','${Obj.movieName}','${Obj.ticket}','${Obj.theatreName}','${Obj.date}','${Obj.price}','${Obj.time}','cancel','${Obj.email}');"> Cancel </button>`;

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


function cancel_booking(id, rev, movieId, movieName, theatreName, ticket, date, time, price, status,email) {
    alert("Do you want to cancel this booking?");
    console.log(id);
    console.log(rev);
    const cancel = {
        "movieId": movieId,
        "movieName": movieName,
        "theatreName": theatreName,
        "ticket": ticket,
        "date": date,
        "time": time,
        "price": price,
        "status": status,
        "email":email
        }
    let url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_booking/" + id + "?rev=" + rev;
    const dbusername = "apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w";
    const dbpassword = "e455d34a303110b468819fbc14388b5e";
    const basicAuth = 'Basic ' + btoa(dbusername + ":" + dbpassword);

    axios.put(url, cancel, { headers: { 'Authorization': basicAuth } }).then(res => {
        alert("Deleted succesfully");
        window.location.reload();

    }).catch(err => {
        alert("error in deleting");

    })

}


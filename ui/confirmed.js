

let userStr = localStorage.getItem("LOGGED_IN_USER");
let user = userStr != null ? JSON.parse(userStr) : [];
console.log("email validate", user.email);

if(user.email != null)
{
   
}
else
{
    alert("need to login first");
    window.location.href = "login.html";
}
function listMovies(){
    alert("hi");
    console.log("list Movies");
    const dbUsername='apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
    const dbPassword='e455d34a303110b468819fbc14388b5e';
    const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);
    const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_movies/_all_docs?include_docs=true";
        axios.get(url,  {headers:{Authorization:basicAuth}}).then(res=>{
            const data = res.data.rows.map(obj=>obj.doc);
            console.table(data);
            formMovieTableData(data);
          
        }).catch(err=>{
            console.error(err.response);
            console.log("Unable to fetch Movies");
        })
}

function formMovieTableData(){
    
    let content = "";
    let i =1;
    // let noOfTickets=localStorage.getItem("noOfTickets");
    // let date=localStorage.getItem("date");
    // let time=localStorage.getItem("time");
    // let movie=localStorage.getItem("movie");
    const dbUsername = 'apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
    const dbPassword = 'e455d34a303110b468819fbc14388b5e';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
    const url="https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_booking/_all_docs?include_docs=true"
    axios.get(url,{ headers: { Authorization: basicAuth } }).then(res=>{
    let details=res.data.rows.map((e)=>e.doc)
    let content="";
    console.log(details)
    for(let Obj of details){

let cancelBook =`<button type='button'  onclick = "cancel_booking('${Obj._id}','${Obj._rev}','${Obj.movieId}','${Obj.movieName}','${Obj.ticket}','${Obj.date}','${Obj.price}','${Obj.time}','cancel');"> Cancel </button>`;

const abc = (Obj.ticket)*(Obj.price);

        content += `<tr>
        <td>${i++}</td>
        <td>${Obj.movieName}</td>
       
        <td>${Obj.ticket}</td>
        <td>${Obj.date}</td>
        <td>${Obj.time}</td>
        <td>${abc}</td>
        <td>${new Date().toJSON().substr(0,10)}</td>

        <td>${Obj.status}</td>
        <td>`;
        if(Obj.status =='Booked'){
        content+=`${cancelBook}`;
        }
        content+=`     
        
    
         </td></tr>
        `
    document.querySelector("#list-movie").innerHTML = content;

    }
    }).catch(err=>console.error(err))


    // console.log(movies)
    
        
        // let imageUrl = "images/" + movieObj.imageUrl;
        // content += `<tr>
        // <td>${i++}</td>
        // <td>${movie}</td>
        // <td>${new Date().toJSON().substr(0,10)}</td>
        // <td>${noOfTickets}</td>
        // <td>${date}</td>
        // <td>${time}</td>
        // <td>booked</td>
        
    
        //  </tr>
        // `;
    
    console.log(content);
}
// listMovies();
formMovieTableData();


function cancel_booking(id, rev,movieId,movieName,ticket,date,time,price,status){
    alert("Do you want to cancel this booking?");
    console.log(id);
    console.log(rev);
    const cancel={
        "movieId": movieId,
        "movieName":movieName,
        "ticket": ticket,
        "date": date,
        "time": time,
        "price": price,
        "status": status
    }
    let url ="https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_booking/"+id+"?rev="+rev;
        const dbusername = "apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w";
        const dbpassword = "e455d34a303110b468819fbc14388b5e";
    const basicAuth = 'Basic '  + btoa(dbusername+ ":" +dbpassword);

    axios.put(url,cancel, { headers: {'Authorization': basicAuth}}).then(res => {
    alert("Deleted succesfully");
window.location.reload();
    
    }).catch(err =>{
        alert("error in deleting");

    })
    
}


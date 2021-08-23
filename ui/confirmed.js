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
    let noOfTickets=localStorage.getItem("noOfTickets");
    let date=localStorage.getItem("date");
    let time=localStorage.getItem("time");
    let movie=localStorage.getItem("movie");

    // console.log(movies)
    
        
        // let imageUrl = "images/" + movieObj.imageUrl;
        content += `<tr>
        <td>${i++}</td>
        <td>${movie}</td>
        <td>${noOfTickets}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>booked</td>
        
        <td><button onClick="deleteMovie('${movieObj._id}','${movieObj._rev}')">Delete</button></td>
         </tr>
        `;
    
    console.log(content);
    document.querySelector("#list-movie").innerHTML = content;
}
// listMovies();
formMovieTableData();
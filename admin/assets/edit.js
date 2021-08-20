const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);

function editDetails(id) {
    console.log(id);
    const dbUsername='apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
    const dbPassword='e455d34a303110b468819fbc14388b5e';
    const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);
    const url = `https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_movies/${id}`;
        axios.get(url,  {headers:{Authorization:basicAuth}}).then(res=>{
            console.log(res.data);
        const movieDetail = res.data;
        console.log(movieDetail)
        document.querySelector("#id").value = movieDetail._id;
        document.querySelector("#rev").value = movieDetail._rev;
        document.querySelector("#title").value = movieDetail.title;
        // const imageUrl = movieDetail.imageUrl.substring(movieDetail.imageUrl.lastIndexOf("\\")+1);
        // document.querySelector("#imageUrl").value = imageUrl;   
        document.querySelector("#price").value = movieDetail.price;
        document.querySelector("#status").value = movieDetail.status;
        document.querySelector("#language").value = movieDetail.language;
        document.querySelector("#seats").value = movieDetail.seats;
    })
    .catch(err => console.error(err));
}
editDetails(id);

function modifyDetails(){

    let id = document.querySelector("#id").value;
    let rev = document.querySelector("#rev").value;
    let title = document.querySelector("#title").value;
    let imageUrlFullPath = document.querySelector("#imageUrl").value;
 const imageUrl =imageUrlFullPath.substring(imageUrlFullPath.lastIndexOf("\\")+1);
    
    let price = document.querySelector("#price").value;
    let status = document.querySelector("#status").value;
    let language = document.querySelector("#language").value;
    let seats = document.querySelector("#seats").value;
    let modifyDetails = {
        "_id": id,
        "_rev": rev,
        "title": title,
        "imageUrl": imageUrl,
        "price": price,
        "status": status,
        "language":language,
        "seats":seats
        }
    console.log(modifyDetails);
    
    const dbUsername='apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
    const dbPassword='e455d34a303110b468819fbc14388b5e';
    const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);
    const url = `https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_movies/${id}`;
        axios.put(url, modifyDetails, {headers:{Authorization:basicAuth}}).then(res=>{
            console.log(modifyDetails)
        alert("successfull");
        window.location.href="list-movie.html";
    }).catch(err => alert("error "))

}

editDetails(id);
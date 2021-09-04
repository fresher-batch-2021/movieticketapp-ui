const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);
/**
 * This function is used to get the data from database to edit
 */
function editDetails(id) {
    console.log(id);
   
   MovieService.editDetails().then(res=>{
            console.log(res.data);
        const movieDetail = res.data;
        console.log(movieDetail)
        document.querySelector("#id").value = movieDetail._id;
        document.querySelector("#rev").value = movieDetail._rev;
        document.querySelector("#title").value = movieDetail.title;
       
        document.querySelector("#status").value = movieDetail.status;
        document.querySelector("#language").value = movieDetail.language;
       
    })
    .catch(err => console.error(err));
}
editDetails(id);
/**
 * This function is used to modify the details and return to the database
 */
function modifyDetails(){

    let id = document.querySelector("#id").value;
    let rev = document.querySelector("#rev").value;
    let title = document.querySelector("#title").value;
    let imageUrlFullPath = document.querySelector("#imageUrl").value;
 const imageUrl =imageUrlFullPath.substring(imageUrlFullPath.lastIndexOf("\\")+1);
    
   
    let status = document.querySelector("#status").value;
    let language = document.querySelector("#language").value;
   
    let modifyDetails = {
        "_id": id,
        "_rev": rev,
        "title": title,
        "imageUrl": imageUrl,
     
        "status": status,
        "language":language
        
        }
    console.log(modifyDetails);
    
   
   MovieService.editMovie(modifyDetails).then(res=>{
            console.log(modifyDetails)
            toastr.success("Updated Succesfully");
          setTimeout(function () {
            window.location.href = "list-movie.html";
          }, 2000)
      
    }).catch(err => alert("error "))

}

editDetails(id);
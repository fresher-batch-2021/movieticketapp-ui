$("#editMovie").click(function () {
    $("#edit").click(modifyDetails);
    
})

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
        $("#id").val( movieDetail._id);
        $("#rev").val(movieDetail._rev); 
        $("#title").val( movieDetail.title); 
        $("#status").val(movieDetail.status); 
        $("#language").val(movieDetail.language); 
       
    })
    .catch(err => console.error(err));
}
editDetails(id);
/**
 * This function is used to modify the details and return to the database
 */

function modifyDetails(){
    event.preventDefault();

    const id = $("#id").val();
    const rev = $("#rev").val();
    const title =$("#title").val();
    let imageUrlFullPath =$("#imageUrl").val();
    const imageUrl =imageUrlFullPath.substring(imageUrlFullPath.lastIndexOf("\\")+1);
    const status =$("#status").val();
    const language =$("#language").val(); 
   
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
editDetails();
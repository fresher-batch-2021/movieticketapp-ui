loginCheck();

function addMovieForm(){
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const language= document.querySelector("#language").value;
    const imageUrlFilePath= document.querySelector("#imageUrl").value;
    const imageUrl = imageUrlFilePath.substring(imageUrlFilePath.lastIndexOf("\\")+1);
    const status= document.querySelector("#status").value;
     addMovie(title,language,imageUrl, status);


}

function addMovie(title,language, imageUrl,status){
    console.log("Add Movie" , title, language, imageUrl, status);
    
    try{
        Validator.isValidString(title, "Movie Title is Mandatory");
        Validator.isValidString(language, "Movie Language is Mandatory");
        Validator.isValidString(imageUrl, "Movie Image is Mandatory");
        Validator.isValidString(status, "Movie status is Mandatory");
        console.log("Movie Details are valid");
        toastr.success("Successfully Added");
        const movieObj = { title:title, language:language, imageUrl: imageUrl, status:status};
        
       
        MovieService.addMovie(movieObj).then(res=>{
            const data = res.data;
            console.log("Response:", data);
            console.log("Successfully Added");

        }).catch(err=>{
            console.error(err.response);
            console.log("Unable to add Movie");
        })
    }
    catch(err){
        console.error(err.message);
        toastr.error("Error" + err.message);
    }
    
}


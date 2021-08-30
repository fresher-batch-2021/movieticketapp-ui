loginCheck();

function addMovieForm(){
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const language= document.querySelector("#language").value;
    const imageUrlFilePath= document.querySelector("#imageUrl").value;
    const imageUrl = imageUrlFilePath.substring(imageUrlFilePath.lastIndexOf("\\")+1);
    const price= document.querySelector("#price").value;
    const seats= document.querySelector("#seats").value;
    const status= document.querySelector("#status").value;
     addMovie(title,language,imageUrl,price, seats, status);


}

function addMovie(title,language, imageUrl, price, seats, status){
    console.log("Add Movie" , title, language, imageUrl, price, seats, status);
    
    try{
        Validator.isValidString(title, "Movie Title is Mandatory");
        Validator.isValidString(language, "Movie Language is Mandatory");
        Validator.isValidString(imageUrl, "Movie Image is Mandatory");
        Validator.isValidString(price, "Movie price is Mandatory");
        Validator.isValidString(seats, "Movie seats is Mandatory");
        Validator.isValidString(status, "Movie status is Mandatory");

        console.log("Movie Details are valid");
        alert("Successfully Added");
        const movieObj = { title:title, language:language, imageUrl: imageUrl, price:price, seats:seats, status:status};
        
       
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
        alert("Error" + err.message);
    }
    
}


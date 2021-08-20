function addMovie(title,language, imageUrl){
    console.log("Add Movie" , title, language, imageUrl);
    
    try{
        Validator.isValidString(title, "Movie Title is Mandatory");
        Validator.isValidString(language, "Movie Language is Mandatory");
        Validator.isValidString(imageUrl, "Movie Image is Mandatory");

        console.log("Movie Details are valid");
        //alert("Successfully Added");
        const movieObj = { title:title, language:language, imageUrl: imageUrl};
        console.log(movieObj);
        const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_addmovie";
        axios.post(url,movieObj).then(res=>{
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
addMovie();
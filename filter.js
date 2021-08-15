
// this function gets language check box value and store it in array
function filterLanguages(){
    // alert("Filter ");
    var allLanguages=document.querySelectorAll("#language");
    let selectedLanguages = [];
    for(let language of allLanguages){
        if (language.checked){
            selectedLanguages.push(language.value);
        }
    }
    console.log(selectedLanguages);

    if (selectedLanguages.length == 0){
        document.getElementById("error").innerHTML="please mark only one checkbox either tamil or english";

    }
    // 
   else{
    const url = "https://product-mock-api.herokuapp.com/movieapp/api/v1/movies";
    axios.get(url).then(res => {

        const movies = res.data;
        let filteredMovies = movies.filter(obj=> selectedLanguages.includes(obj.language));
       displayMovies(filteredMovies);
    })

            .catch(err => {

alert("error");
                console.error(err);
            });
    
    // //    get movies from the back end and filter movies based on the selected languages
    // var images = [{ imageUrl: "sarpatta.jpg",language:"tamil",title:"sarpatta"}, { imageUrl: "valimai.jfif",language:"tamil",title:"valimai" }, { imageUrl: "3036057.jpg",language:"tamil", title:"Master"},
    //     { imageUrl: "joker.jpg", language:"english",title:"joker" }, { imageUrl: "doctor.jfif",language:"tamil",title:"doctor"}, { imageUrl: "karnan.jpg",language:"tamil",title:"karnan"}];
    // displaying images 
        //  let filteredMovies = images.filter(obj=>obj.language=="tamil"|| obj.language=='english');
       
   }
   }
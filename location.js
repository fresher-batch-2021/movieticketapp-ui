
 function filterLocation(){
    // alert("Filter ");
    var allLocation=document.querySelectorAll("#location");
    let selectedLocation = [];
    for(let location of allLocation){
        if (location.checked){
            selectedLocation.push(location.value);
        }
    }
    console.log(selectedLocation);

    if (selectedLocation.length == 0){
        document.getElementById("error").innerHTML="please mark only one checkbox either tamil or english";

    }
    // 
   else{
    //    get movies from the back end and filter movies based on the selected languages
    var images = [{ imageUrl: "sarpatta.jpg",language:"tamil",title:"sarpatta"}, { imageUrl: "valimai.jfif",language:"tamil",title:"valimai" }, { imageUrl: "3036057.jpg",language:"tamil", title:"Master"},
        { imageUrl: "joker.jpg", language:"english",title:"joker" }, { imageUrl: "doctor.jfif",language:"tamil",title:"doctor"}, { imageUrl: "karnan.jpg",language:"tamil",title:"karnan"}];
    // displaying images 
        //  let filteredMovies = images.filter(obj=>obj.language=="tamil"|| obj.language=='english');
       let filteredMovies = images.filter(obj=> selectedLocation.includes(obj.location));
       displayMovies(filteredMovies);
   }
   }


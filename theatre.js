
// this function gets language check box value and store it in array
function filterExperience(){
    // alert("Filter ");
    var allExperience=document.querySelectorAll("#experience");
    console.log(allExperience);
    let selectedExperience = [];
    for(let experience of allExperience){
        if (experience.checked){
            selectedExperience.push(experience.value);
        }
    }
    console.log(selectedExperience);

    if (selectedExperience.length == 0){
      alert("please");
        // document.getElementById("error").innerHTML="please mark only one checkbox either tamil or english";

    }
    // 
   else{
    //    get movies from the back end and filter movies based on the selected languages
    var Theatres = [{ imageUrl: "sangam.jpg",name:"Sangam Cinemas",experience:"4k",location:"chennai" }, { imageUrl: "devi.jfif",name:"Devi Cineplex",experience:"Dolby Atmos",location:"madurai"}, { imageUrl: "kasi.jpg",name:"Kasi Theatre",experience:"2k",location:"coimbatore"},
    { imageUrl: "vettri.jfif",name:"Vettri Theatre",experience:"Dolby Atmos",location:"chennai"}, { imageUrl: "sathyam.jpg",name:"Sathyam Cinemas",experience:"4k",location:"chennai"}, { imageUrl: "pvr.jpg",name:"PVR",experience:"2k",location:"coimbatore"}];
    // // displaying images 
        //  let filteredMovies = images.filter(obj=>obj.language=="tamil"|| obj.language=='english');
       let filteredTheatres = Theatres.filter(obj=> selectedExperience.includes(obj.experience));
       displayTheatres(filteredTheatres);
   }
   }
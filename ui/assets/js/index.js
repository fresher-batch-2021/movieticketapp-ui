var slideIndex = 0;




function addSliderImages() {
    let slideData = [];
const dbUsername = 'apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
const dbPassword = 'e455d34a303110b468819fbc14388b5e';
const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
const activeMovie = {
    selector: {
        "status": "Active",
    },
    fields: ["imageUrl"]
}

const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_movies/_find";
axios.post(url, activeMovie, { headers: { Authorization: basicAuth } }).then(res => {
    console.log("movie " + res.data.docs);
    for(let obj of res.data.docs){
        slideData.push("images/"+obj.imageUrl);
    }

console.log(slideData);

    const slider = document.querySelector('.slideshow-container');//to place the html code in container


    for (let slide of slideData) {
        let slideDiv = document.createElement('div');
        slideDiv.setAttribute('class', 'mySlides fade');

        slideDiv.innerHTML = `<img class="imgslide" src="${slide}"/>`;


        slider.appendChild(slideDiv);

    }
})
}


function showSlides() {

    slideIndex++;


    
    let mySlidesDiv = document.querySelectorAll('.mySlides');
    console.log(mySlidesDiv);

    // Don't display images
    mySlidesDiv.forEach(divObj => {
        divObj.style.display = "none";
    });


    //reset to 1st image
    if (slideIndex > mySlidesDiv.length) {
        slideIndex = 1
    }

    //display one image at at time
    // console.log(mySlidesDiv)
    mySlidesDiv[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 1500); // Change image every 2 seconds  
}
addSliderImages();
showSlides();

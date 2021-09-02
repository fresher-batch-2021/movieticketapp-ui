var slideIndex = 0;

let slideData = ["images/karnan.jpg", "images/jagame.jpg", "images/3036057.jpg","images/aqua.jpg"];

function addSliderImages() {


    const slider = document.querySelector('.slideshow-container');//to place the html code in container


    for (let slide of slideData) {
        let slideDiv = document.createElement('div');
        slideDiv.setAttribute('class', 'mySlides fade');

        slideDiv.innerHTML = `<img class="imgslide" src="${slide}"/>`;


        slider.appendChild(slideDiv);

    }

}


function showSlides() {

    slideIndex++;
    


    let mySlidesDiv = document.querySelectorAll('.mySlides');

    // Don't display images
    mySlidesDiv.forEach(divObj => {
        divObj.style.display = "none";
    });


    //reset to 1st image
    if (slideIndex > mySlidesDiv.length) {
        slideIndex = 1
    }

    //display one image at at time
    mySlidesDiv[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 1500); // Change image every 2 seconds  
}
addSliderImages();
showSlides();

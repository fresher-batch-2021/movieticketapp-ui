// // displaying images 

/**
 * This method will get movies and display movies in the page
 */

function getMovies() {
    MovieService.movies().then(res => {
console.log(res.data.rows)
        let movies = res.data.rows;
        movies = movies.map((obj) => obj.doc);
        displayMovies(movies)
    })
        .catch((err) => {
            console.error(err);
        });

}
getMovies();
// alert(datas);
function displayMovies(movies) {

    let content = "";
    var count = 0;
    for (let movie of movies) {
        console.log(movie);
        if(movie.status==="Active"){
            content = content +
            `
    <div class="product">
        
          <a onClick="showMovies('${movie.title}')"   href="book.html?movie=${movie.title}&id=${movie._id}">  <img class="productImg" src="images/${movie.imageUrl}" id="productImg" alt=""></a>
         
    </div>`;
        }else{
            console.log("no movies")            
        }

      
        count = count + 1;
        if (count == 2) {
            content = content + `<br>`;
            count = 0;
        }

    }
    document.querySelector(".moviesPage").innerHTML = content;
}
/**
 * This function saves the selected in local storage
 * @param {string} title 
 */
function showMovies(title) {


    //movies.html
    localStorage.setItem("SELECTED_MOVIE", title);
}


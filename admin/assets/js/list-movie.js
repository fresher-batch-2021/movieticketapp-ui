/**
 * This function displays the list movies from database
 */
function listMovies() {
    console.log("list Movies");
   
   MovieService.listMovie().then(res => {
        const data = res.data.rows.map(obj => obj.doc);
        // console.table(data);
        formMovieTableData(data);

    }).catch(err => {
        console.error(err.response);
        console.log("Unable to fetch Movies");
    })
}
/**
 * This Function display the data in table
 * @param {*} movies 
 */
function formMovieTableData(movies) {

    let content = "";
    let i = 1;
    $("#list-movie tbody").empty();
    for (let movieObj of movies) {

        let imageUrl = "images/" + movieObj.imageUrl;
        content += `<tr><td>${i++}</td><td>
        <img src="${imageUrl}" alt="${imageUrl}" width="300px" height="150px" />${movieObj.title}</td>
        <td>${movieObj.language}</td>
       
        <td><a href='edit.html?id=${movieObj._id}'>Edit</a></td>
        <td>${movieObj.status}</td>
        <td><button onClick="deleteMovie('${movieObj._id}','${movieObj._rev}')">Delete</button></td></tr>`;
      
    }
    $("#list-movie tbody").append(content);
   // console.log(content);
   
}
listMovies();
/**
 * This function search by movie name
 */

function searchName() {
    let searchName = $("#searchBox").val().toLowerCase();
    let myTable = $("#list-movie");
   
    $("#list-movie tbody tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(searchName) > -1)
    
    });
}


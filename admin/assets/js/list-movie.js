/**
 * This function displays the list movies from database
 */
function listMovies() {
    console.log("list Movies");
   
   MovieService.listMovie().then(res => {
        const data = res.data.rows.map(obj => obj.doc);
        console.table(data);
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
    for (let movieObj of movies) {

        let imageUrl = "images/" + movieObj.imageUrl;
        content += `<tr><td>${i++}</td><td>
        <img src="${imageUrl}" alt="${imageUrl}" width="300px" height="150px" />${movieObj.title}</td>
        <td>${movieObj.language}</td>
       
        <td><a href='edit.html?id=${movieObj._id}'>Edit</a></td>
        <td>${movieObj.status}</td>
        <td><button onClick="deleteMovie('${movieObj._id}','${movieObj._rev}')">Delete</button></td></tr>`;
    }
    console.log(content);
    document.querySelector("#list-movie").innerHTML = content;
}
listMovies();
/**
 * This function search by movie name
 */
function searchName() {
    let searchName = document.getElementById("searchBox").value.toLowerCase();
    let myTable = document.getElementById("myTable");
    let tableRow = myTable.getElementsByTagName("tr");
    for (var i = 0; i < tableRow.length; i++) {
        let tableDatas = tableRow[i].getElementsByTagName("td")[1];
        if (tableDatas) {
            let textValue = tableDatas.textContent.toLowerCase() || tableDatas.innerText.toLowerCase();
            if (textValue.indexOf(searchName) > -1) {
                tableRow[i].style.display = "";
            } else {
                tableRow[i].style.display = "none";
            }
        }
    }
}
function listMovies() {
    console.log("list Movies");
    const dbUsername = 'apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
    const dbPassword = 'e455d34a303110b468819fbc14388b5e';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
    const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_movies/_all_docs?include_docs=true";
    axios.get(url, { headers: { Authorization: basicAuth } }).then(res => {
        const data = res.data.rows.map(obj => obj.doc);
        console.table(data);
        formMovieTableData(data);

    }).catch(err => {
        console.error(err.response);
        console.log("Unable to fetch Movies");
    })
}

function formMovieTableData(movies) {

    let content = "";
    let i = 1;
    for (let movieObj of movies) {

        let imageUrl = "images/" + movieObj.imageUrl;
        content += `<tr><td>${i++}</td><td>
        <img src="${imageUrl}" alt="${imageUrl}" width="300px" height="150px" />${movieObj.title}</td><td>${movieObj.language}</td><td>Rs.${movieObj.price}</td><td>${movieObj.seats}</td><td><a href='edit.html?id=${movieObj._id}'>Edit</a></td><td>${movieObj.status}</td><td><button onClick="deleteMovie('${movieObj._id}','${movieObj._rev}')">Delete</button></td></tr>`;
    }
    console.log(content);
    document.querySelector("#list-movie").innerHTML = content;
}
listMovies();
function searchName() {
    let searchName = document.getElementById("searchBox").value;
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
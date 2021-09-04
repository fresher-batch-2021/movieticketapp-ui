/**
 * This function gets language check box value and store it in array
 */
function filterLanguages() {
 
    var allLanguages = document.querySelectorAll("#language");
    let selectedLanguages = [];
    for (let language of allLanguages) {
        if (language.checked) {
            selectedLanguages.push(language.value);
        }
    }
    console.log(selectedLanguages);
    if (selectedLanguages.length == 0) {
        document.getElementById("error").innerHTML = "please mark only one checkbox either tamil or english";

    }
    else {
        MovieService.filter(selectedLanguages[0]).then(res => {
            console.log(res.data);
            console.log(res.data.docs);
            const movies = res.data.docs;

            displayMovies(movies);
        })
            .catch(err => {

                alert("error");
                console.error(err);
            });


    }
}
function filterClear(){
    var clist = document.getElementsByTagName("input");
for (var i = 0; i < clist.length; ++i) { clist[i].checked = false; }
window.location.reload();
}
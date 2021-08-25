
// this function gets language check box value and store it in array
function filterLanguages() {
    // alert("Filter ");
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
        const dbUsername = 'apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
        const dbPassword = 'e455d34a303110b468819fbc14388b5e';
        const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
        const data = {
            'selector': {
                language: selectedLanguages[0]
            }
        }
        const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_movies/_find";
        axios.post(url,data,{headers:{Authorization:basicAuth}} ).then(res => {
            console.log(res.data);
            console.log(res,data.docs);
            const movies = res.data.docs;
            // let filteredMovies = movies.filter(obj => selectedLanguages.includes(obj.language));
            displayMovies(movies);
        })

            .catch(err => {

                alert("error");
                console.error(err);
            });

       
    }
}
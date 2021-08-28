const dbUsername='apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
const dbPassword='e455d34a303110b468819fbc14388b5e';
const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);

class MovieService{
    /**
     * This method return all the movies
     * @returns []
     */
    static movies(){
        const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_movies/_all_docs?include_docs=true";
        return axios.get(url,{headers:{Authorization:basicAuth}})
    }

    /**
     * This method return the filter movies
     * @param {string} selectedLanguages 
     * @returns 
     */
    static filter(selectedLanguages){
        const data = {
            'selector': {
                language: selectedLanguages
            }
        }
        const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_movies/_find";
        return axios.post(url,data,{headers:{Authorization:basicAuth}} )
    }
}
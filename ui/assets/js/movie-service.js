

class MovieService{
    /**
     * This method return all the movies
     * @returns []
     */
    static movies(){
        const url = endPoint+"movieapp_movies/_all_docs?include_docs=true";
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
        const url = endPoint+"movieapp_movies/_find";
        return axios.post(url,data,{headers:{Authorization:basicAuth}} )
    }
}
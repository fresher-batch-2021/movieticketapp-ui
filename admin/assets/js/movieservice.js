const dbUsername='apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
const dbPassword='e455d34a303110b468819fbc14388b5e';
const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);

class MovieService{
    /**
     * This function is used to add movies
     * @param {string} movieObj 
     * @returns 
     */
    static addMovie(movieObj){
    
        const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_movies";
        return axios.post(url,movieObj, {headers:{Authorization:basicAuth}})

    }
    /**
     * This function is used to delete movies in database
     * @param {*} movieId 
     * @param {*} revId 
     * @returns 
     */
    static deleteMovie(movieId,revId){
        const url ="https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_movies/"+movieId+"?rev="+revId;
        console.log(url);
         return axios.delete(url,{headers:{Authorization:basicAuth}})
    }
    /**
     * This function is used to listmovies 
     * @returns 
     */
    static listMovie(){
        const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_movies/_all_docs?include_docs=true";
        return axios.get(url, { headers: { Authorization: basicAuth } })
    }
    /**
     * This function is used to edit details
     * @returns 
     */
    static editDetails(){
        const url = `https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_movies/${id}`;
        return axios.get(url,  {headers:{Authorization:basicAuth}})
    }
    /**
     * This function is used to edit movies
     * @param {string} modifyDetails 
     * @returns 
     */
    static editMovie(modifyDetails){
        const url = `https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_movies/${id}`;
        return axios.put(url, modifyDetails, {headers:{Authorization:basicAuth}})
    }
}
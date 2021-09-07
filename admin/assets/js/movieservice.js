

class MovieService{
    /**
     * This function is used to add movies
     * @param {string} movieObj 
     * @returns 
     */
    static addMovie(movieObj){
    
        const url = endPoint+"movieapp_movies";
        return axios.post(url,movieObj, {headers:{Authorization:basicAuth}})

    }
    /**
     * This function is used to delete movies in database
     * @param {*} movieId 
     * @param {*} revId 
     * @returns 
     */
    static deleteMovie(movieId,revId){
        const url =endPoint+"movieapp_movies/"+movieId+"?rev="+revId;
        console.log(url);
         return axios.delete(url,{headers:{Authorization:basicAuth}})
    }
    /**
     * This function is used to listmovies 
     * @returns 
     */
    static listMovie(){
        const url = endPoint+"movieapp_movies/_all_docs?include_docs=true";
        return axios.get(url, { headers: { Authorization: basicAuth } })
    }
    /**
     * This function is used to edit details
     * @returns 
     */
    static editDetails(){
        const url = endPoint+`movieapp_movies/${id}`;
        return axios.get(url,  {headers:{Authorization:basicAuth}})
    }
    /**
     * This function is used to edit movies
     * @param {string} modifyDetails 
     * @returns 
     */
    static editMovie(modifyDetails){
        const url = endPoint+`movieapp_movies/${id}`;
        return axios.put(url, modifyDetails, {headers:{Authorization:basicAuth}})
    }
}
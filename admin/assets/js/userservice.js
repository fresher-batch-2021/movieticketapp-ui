
/**
 * This function is used for login
 */
class UserService{
    static login(username, password){

        const url=endPoint+"movieapp_user/_find";
    
        const requestData = {
            selector: {
                email: username,
                password: password,
            },
            fields:["_id", "name", "email","role"]
        };
     return axios.post(url,requestData,{headers:{Authorization:basicAuth}});
    }
    /**
     * This function is used to get users in list user page
     * @returns 
     */
    
    static getUsers(){

        const sortData = 
            {
                "selector":{
                
                },
               "sort":[{"bookingDate":"desc"}]
             
            }
    const url = endPoint+"movieapp_booking/_find";
    return axios.post(url,sortData,  {headers:{Authorization:basicAuth}})
    
    }
}

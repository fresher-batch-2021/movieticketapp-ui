const dbUsername='apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
const dbPassword='e455d34a303110b468819fbc14388b5e';
const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);
/**
 * This function is used for login
 */
class UserService{
    static login(username, password){

        const url="https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_user/_find";
    
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
    const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_booking/_find";
    return axios.post(url,sortData,  {headers:{Authorization:basicAuth}})
    
    }
}

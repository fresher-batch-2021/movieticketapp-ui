    

class UserService{
    static login(username, password){

    const url=endPoint+"movieapp_user/_find";

    const requestData = {
        selector: {
            email: username,
            password: password,

        },
        fields:["_id", "name", "email","username","role"]
    };
 return axios.post(url,requestData,{headers:{Authorization:basicAuth}});
}



static register(userobj){
    const url=endPoint+"movieapp_user";
     return axios.post(url,userobj, {headers:{'Authorization':basicAuth}})
}
 



}
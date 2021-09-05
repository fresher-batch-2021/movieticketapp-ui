function user_list(){
        

    const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_user/_all_docs?include_docs=true";
    const dbUsername='apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
    const dbPassword='e455d34a303110b468819fbc14388b5e';
    const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);
       
    axios.get(url, { headers: {'Authorization': basicAuth}}).then(res => {
    let data = res.data.rows;
    const users = data.map(obj=>obj.doc);
    console.log(users);
    let value = "";
    let i = 0;
    for(let user of users){
            if(user.role == "USER"){
            i++;
            value = value + `<tr><td>${i}</td><td>${user.username}</td><td>${user.email}</td></tr>` ;
        }
        
        document.querySelector("#task_table").innerHTML = value;
    }
    
 
    
})
}
user_list()
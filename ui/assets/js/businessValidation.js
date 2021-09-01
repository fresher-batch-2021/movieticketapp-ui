function bussinessValidation(email) {
    const dbUserName = 'apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
    const dbPassword = 'e455d34a303110b468819fbc14388b5e';
    var endpoint = 'https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/';
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

    const url = endpoint + "movieapp_user/_find";
    // ===
    let requestData =
    {
        selector: {
            email: email
        },
        fields: ["email"]
    };
    return axios.post(url, requestData, { headers: { Authorization: basicAuth } });
}
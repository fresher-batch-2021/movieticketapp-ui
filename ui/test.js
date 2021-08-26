
function historyService(){
    const dbUsername = 'apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
    const dbPassword = 'e455d34a303110b468819fbc14388b5e';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
    const endpoint = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_booking/";
    

let userdata=JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
// const email="hari@gmail.com";
// console.log(id);
const url=endpoint+'_find';

const requestData = {
    selector: {
        email: userdata.email
        // email:email
    },
    fields:["movieName","ticket","date","time","price","status"]
};

return axios.post(url,requestData,{headers:{Authorization:basicAuth}});
} 
    // let movies=res.data.docs;
    // console.table(movies)
    // let content = `
    //      <table border="1">
    //      <thead>
    //          <th>movieName</th>
    //          <th>theaterName</th>
    //          <th>ticket</th>
    //          <th>date</th>
    //          <th>time</th>
    //          <th>price</th>
    //          <th>status</th>
    //      </thead>
    //      <tbody>
    //      `;
    //      for(let movie of movies){
    //       content+=`
    //         <tr>
    //         <td>${movie.movieName}</td>
    //         <td></td>
    //         <td>${movie.ticket}</td>
    //         <td>${movie.date}</td>
    //         <td>${movie.time}</td>
    //         <td>${movie.price}</td>
    //         <td>${movie.status}</td>
    //     </tr>
    //     `;
    //      }
    //      content+=`
    //      </tbody>
    //  </table>
    //  `;
    //  document.querySelector(".table").innerHTML=content;
// });













    
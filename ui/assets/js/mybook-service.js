const dbUsername = 'apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
const dbPassword = 'e455d34a303110b468819fbc14388b5e';
const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
class BookService {
    /**
     * This function returns user booking history
     * @returns []
     */
    static booking() {
        const endpoint = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_booking/";


        let userData = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));

        const url = endpoint + '_find';

        const requestData = {
            selector: {
                email: userData.email

            },
            fields: ["_id", "_rev", "movieName", "ticket", "date", "time", "price", "status", "theatreName", "email"],
            // "sort":[{"bookingDate":"desc"}]
        };

        return axios.post(url, requestData, { headers: { Authorization: basicAuth } })

    }
    /**
     * This function returns to  cancel the booked ticket by user
     * @param {string} id 
     * @param {string} rev 
     * @param {string} movieId 
     * @param {string} movieName 
     * @param {string} theatreName 
     * @param {string} ticket 
     * @param {string} date 
     * @param {string} time 
     * @param {string} price 
     * @param {string} status 
     * @param {string} email 
     * @returns 
     */
    static cancel(id, rev, movieId, movieName, theatreName, ticket, date, time, price, status, email) {
        console.log(id);
        console.log(rev);
        const cancel = {
            "movieId": movieId,
            "movieName": movieName,
            "theatreName": theatreName,
            "ticket": ticket,
            "date": date,
            "time": time,
            "price": price,
            "status": status,
            "email": email
        }
        const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_booking/" + id + "?rev=" + rev;
        return axios.put(url, cancel, { headers: { 'Authorization': basicAuth } })
    }
    /**
     * This function returns to display the price to user 
     * @param {string} movieId 
     * @returns 
     */
    static priceService(movieId){
        const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_movies/"+ movieId;
        return axios.get(url, { headers: { Authorization: basicAuth } })

    }
/**
 * This function returns the booking table values
 * @param {string} movieId 
 * @param {string} movieName 
 * @param {string} noOfTickets 
 * @param {string} theatreName 
 * @param {string} date 
 * @param {string} time 
 * @param {string} price 
 * @param {string} email 
 * @returns 
 */
    static bookTable( movieId,movieName, noOfTickets, theatreName,date,time,price,email,bookingDate,currentTime){
        
        let Obj = {
            "movieId": movieId,
            "movieName": movieName,
            "ticket": noOfTickets,
            "theatreName": theatreName,
            "date": date,
            "time": time,
            "price": price,
            "status": "Booked",
            "email": email,
            "bookingDate":bookingDate,
            // "currentTime":currentTime
        }
        
        const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_booking"
        return axios.post(url, Obj, { headers: { Authorization: basicAuth } })
    }
    static theatreService(){
        const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_theatres/_all_docs?include_docs=true"
        return axios.get(url,{headers:{Authorization:basicAuth}})
    }
    static quantity(criteria){
        const url = "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_booking/_find"
        return axios.post(url,criteria,{headers:{Authorization:basicAuth}})
    }
}
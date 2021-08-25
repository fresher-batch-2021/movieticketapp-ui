function deleteMovie(movieId,revId) {
    console.log("delete movie", movieId, revId);
    if (movieId == null) {
      alert("Movie Id is mandatory");
    } else {
      const dbUsername='apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w';
      const dbPassword='e455d34a303110b468819fbc14388b5e';
      const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);
      const url =
        "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/movieapp_movies/"+movieId+"?rev="+revId;
        console.log(url);
      axios
        .delete(url,{headers:{Authorization:basicAuth}})
        .then(res => {
          // const data = res.data;
          // console.log(data);
          console.log("Successfully Deleted");
          alert("deleted successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.response.data);
          console.log("Unable to delete Movies" + movieId);
        });
    }
  }
  //deleteMovie();
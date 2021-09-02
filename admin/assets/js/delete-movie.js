function deleteMovie(movieId,revId) {
    console.log("delete movie", movieId, revId);
    if (movieId == null) {
      console.error();
    } else {
     
     
        MovieService.deleteMovie(movieId,revId).then(res => {
         
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
  deleteMovie();
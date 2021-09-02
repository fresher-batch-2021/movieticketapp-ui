/**
 * This function is used to delete movies from database
 * @param {*} movieId 
 * @param {*} revId 
 */

function deleteMovie(movieId,revId) {
    console.log("delete movie", movieId, revId);
    if (movieId == null) {
      console.error();
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: "Do You want to delete this booking",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
    })
        .then(result => {
            if (result.isConfirmed) {
              MovieService.deleteMovie(movieId,revId).then(res => {
                  
                        Swal.fire(
                            'Delete!',
                            'Your Movie has been Deleted.',
                            'success',
                            setTimeout (function(){
                              window.location.reload()
                            },1000)
                            
                        )
                    })
            }
})
          
        
        .catch((err) => {
          console.log(err.response.data);
          console.log("Unable to delete Movies" + movieId);
        });
    }
  }
  deleteMovie();
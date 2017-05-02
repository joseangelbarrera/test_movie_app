angular.module('pelimoviesApp')

  .factory('moviesService', function ($http) {
    function searchMovie (query) {
      var api_key = '201cdf0b3213bde3307da905afb0f471'
      var urlSearchMovie = 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&query=' + $scope.movieQuery
      console.log(urlSearchMovie)
      return $http.get(urlSearchMovie)
    }

    function movieSelection (idArtist) {
      console.log($socpe.mnovieSelected)
    }

    return {
      searchMovie: searchMovie
      // movieSelection: movieSelection
    }
  })

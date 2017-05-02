angular.module('pelimoviesApp')
    .controller('searchController', function ($scope, $rootScope, moviesService) {
      $scope.movieQuery = 'the godfather'

      $scope.searchMovie = function () {
        var query = $scope.movieQuery
        moviesService.searchMovie(query)
                .then(function (response) {
                  console.log('response.data.results')
                  // $rootScope.pelis = response.data
                })
      }
    })

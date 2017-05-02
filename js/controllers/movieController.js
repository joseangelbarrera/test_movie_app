angular.module('pelimoviesApp')
 .controller('movieController', function ($scope, $rootScope, moviesService) {
   $scope.movieSelection = function () {
     var idMovie = $scope.movieSelected
     moviesService.get(idMovie)
                    .then(function (response) {
                      $rootScope.movies = response.data.results
                    })
   }
 })

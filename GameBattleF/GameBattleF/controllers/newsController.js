angular
  .module("myApp")
  .controller("newsController", function ($scope, $state, $timeout, $interval, newsService, usersService) {

    $scope.currentUser = usersService.currentUser;
    $scope.articleCount = 0;

    newsService.getNews().then(function (response) {
      $scope.myNews = response.data.articles
    })

    $scope.nextArticle = function () {
      if ($scope.articleCount >= $scope.myNews.length - 1) {
        $scope.articleCount = 0;
      } else {
        $scope.articleCount++;
      }
    }

    $timeout(function () {
      console.log("Yo");
      $interval(function () {
        $scope.nextArticle()
      }, 5000);
    }, 1000)
  })
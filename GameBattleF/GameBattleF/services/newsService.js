angular
.module("myApp")
.service("newsService", function ($http, $state) {
  //gets the top 10 news from the Esports api
  this.getNews = function() {
    return $http.get("https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=43b4b5eff75e438cb1d80023e0882fe4")
  }
})
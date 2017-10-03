angular
    .module("myApp")
    .service("clansService", function ($http, $state) {
        //Gets all the clans from DB
        this.getClans = function () {
            return $http.get("http://localhost:5000/api/clans")
        }
        // Gets a specfic clan from the DB
        this.getClan = function (id) {
            return $http.get("http://localhost:5000/api/clans/" + id);
        }
        //Posts a clan to the DB
        this.addClans = function (clan, user) {
            $http.post("http://localhost:5000/api/clans?cname=" + clan.clanname + "&fromUserId=" + user.id).then(function () {
                $state.go("showClans");
            });
    }
})
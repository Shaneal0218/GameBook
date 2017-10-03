angular
    .module("myApp")
    .service("usersService", function ($http, $state) {
        this.currentUser = null;
        var that = this
        var myFriend = null;
        //get all user from the DB
        this.getUsers = function () {
            return $http.get("http://localhost:5000/api/users")
        }
        //post a new user to the DB
        this.addUsers = function (user) {
            $http.post("http://localhost:5000/api/users", user).then(function () {
                $state.go("users");
            });
        }
        //Delete a user from the DB
        this.deleteUsers = function (id) {
            $http.delete("http://localhost:5000/api/users/" + id);
        }
        //Get a another user from the DB other then yours
        this.getFriend = function (id) {
            return $http.get("http://localhost:5000/api/users/" + id);

        }
        //Update your account
        this.updateUsers = function (user) {
            $http.put("http://localhost:5000/api/users", user).then(function () {
                $state.go("users");
            });
        }
        //Get your user form the DB
        this.setCurrentUser = function (user) {
            $http.get("http://localhost:5000/api/users/" + user.id).then(function (response) {
                that.currentUser = response.data;
                console.log(that.currentUser)
                // console.log(this)
                $state.go("home");
            }, function (error) {
                console.log(error);
            });
        }
    })
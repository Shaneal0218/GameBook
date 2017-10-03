angular
.module("myApp")
.service("friendRequestsService", function ($http, $state) {
    // get all the friend requests from the DB
    this.getFriendRequests = function () {
        return $http.get("http://localhost:5000/api/friendsrequest")
    }
    //Post a friend request to the DB
    this.addFriendRequests = function (user1,user2) {
        $http.post("http://localhost:5000/api/friendsrequest?fromUserId="+ user1.id + "&toUserId=" + user2.id).then(function (response) {
            console.log(response);   
        });
        alert("Your friend request has been sent.");
        $state.reload();
    }
    //Delete a friend request from the DB
    this.deleteFriendRequests = function (id) {
        $http.delete("http://localhost:5000/api/friendsrequest/" + id);
    }
    //accept a friend request
    this.acceptFriendRequests = function(user1, user2,requestID) {
        $http.post("http://localhost:5000/api/friends?fromUserId=" + user1.id + "&toUserId=" + user2.id).then(function (response) {
            $http.delete("http://localhost:5000/api/friendsrequest/" + requestID);
        })
        alert("You are now friends with " + user1.username);
        $state.reload();
    }
})
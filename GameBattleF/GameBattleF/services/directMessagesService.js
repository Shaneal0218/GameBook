angular
.module("myApp")
.service("directMessagesService", function ($http, $state) {
    // Get all the DM from the DB
    this.getDirectMessages = function () {
        return $http.get("http://localhost:5000/api/directmessages")
    }
    //Post a DM to the DB
    this.addDirectMessages = function (user1, user2, message) {
        $http.post("http://localhost:5000/api/directmessages?fromUserId="+ user1.id + "&toUserId=" + user2.id + "&message=" + message).then(function (response) {
            console.log(response); 
        });
        alert("Your message has been sent.");
        $state.reload();
    }
})
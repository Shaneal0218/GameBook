angular
    .module("myApp")
    .controller("usersController", function ($scope, $state, $stateParams, usersService, clansService, clansRequestService, directMessagesService, friendRequestsService) 
    {
        //Get a User Friend
        if ($stateParams.id != null && $stateParams.id != undefined) {
            usersService.getFriend($stateParams.id).then(function (response) {
                $scope.myFriend = response.data;
                console.log($scope.myFriend)
            })
        }
        //Get a Clan
        if ($stateParams.id != null && $stateParams.id != undefined) {
            clansService.getClan($stateParams.id).then(function (response) {
                $scope.clan = response.data;
                console.log($scope.clan)
            })
        }
        $scope.currentUser = usersService.currentUser;
        $scope.myFriend = null;
        $scope.invalidUser = false;
        //Get users from db
        usersService.getUsers()
            .then(function (response) {
                $scope.users = response.data;
                console.log($scope.users);
            })
        //Post a specific user to the DB
        $scope.addUsers = function () {
            usersService.addUsers($scope.newuser)
        }
        //Update a user to the DB
        $scope.updateUsers = function () {
            usersService.updateUsers($scope.currentUser)
        }
        //Delete a specfic user from the DB
        $scope.deleteUsers = function (user) {
            usersService.deleteUser(user.id);
            $scope.users.splice($scope.users.indexOf(user), 1)
        }
        //Get Clans from the DB
        clansService.getClans()
            .then(function (response) {
                $scope.clans = response.data;
                console.log($scope.clans)
            })
        //Post a clan to the DB
        $scope.addClans = function () {
            clansService.addClans($scope.newclan, $scope.currentUser)
        }
        //Get a clan back from the DB
        $scope.getClan = function (clan) {
            clansService.getClan(clan.id).then(function (response) {
                $scope.clan = response.data;
            })
        }
        //Allow our user to sign in if the user information is the users in the DB
        $scope.validateUser = function () {
            for (var i = 0; i < $scope.users.length; i++) {
                if ($scope.users[i].password === $scope.password && $scope.users[i].username === $scope.username) {
                    usersService.setCurrentUser($scope.users[i])
                    break;
                }
                else {
                    console.log("couldnt find user")
                }
            }
        }
        //Get a User back
        $scope.getFriend = function (friend) {
            $state.go("showUser", { id: friend.id });
        }
        //Get a Clan back
        $scope.getClan = function (clan) {
            $state.go("showClan", { id: clan.id });
        }
        //Post a clan request to the DB
        $scope.addClanRequests = function (clan, message) {
            console.log(clan.clanleader)
            console.log(message)
            clansRequestService.addClanRequests($scope.currentUser, clan.clanleader, clan, message)
        }
        //Post a direct message to the DB
        $scope.addDirectMessages = function (user, message) {
            directMessagesService.addDirectMessages($scope.currentUser, user, message);
        }
        //Post a friend request to the DB
        $scope.addFriendRequests = function (user) {
            friendRequestsService.addFriendRequests($scope.currentUser, user);
        }
    })



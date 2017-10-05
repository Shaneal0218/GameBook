GameBook is a social media platform that brings together gamers from all around the world. Create a profile find your friends and build your own gaming empire. 

Front-End-
    Our frontend was created with HTML, CSS, BootStrap, JavaScript, and AngularJS. Our main functionality of our frontend was to send and retrieve data to the backend so our frontend can use CRUD functions to dynamically update our website. Some of the dynamic features we created were friends lists and notifications. When a user logs in our AngularJS Controller pulls data from our Angular Service which is then connected to our backend that has a list of requests. these requests are then filtered with ng-ifs that check if our current user is the same as user1 on our requests object. If they match they our then display on our website under the user`s notifications. 

Back-End-
    Our backend was created with C#, ASP.NET, and the Entity Framework. Our main functionality of our backend was to populate our front-end with information. We made user,clan,friend request,direct message, and clan request models. One of biggest challenges was creating and understanding how request object`s worked. Each request object had to have a relationship between either a user and user or user and clan. With the friends request model we had to do user and user. Once the relationship is made in the frontend and sent to the backend this model is created and injected into our friend request list which is then able to be populated in our frontend. When a user accepts the request it is sent back to the backend where our .NET MVC Controller handles our funtionality. The controller recieves a fromUserId and toUserId which then pulls the user object from our users list and adds each user to each others friends list.
    
<img src="./READMEPic/login.png">
Login in if you already have a user created.
<img src="./READMEPic/signup.png">
Sign up if you don`t already have an account.
<img src="./READMEPic/homepage.png">
Homepage where you can view the top 10 Esport news trending right now with the slideshow.
<img src="./READMEPic/friend.png">
Find a friend near your to connect to.
<img src="./READMEPic/findfriend.png">
Once you have found a friend send them a friend request.
<img src="./READMEPic/clanr.png">
Once you have found friends maybe its time to build your own empire.
<img src="./READMEPic/clan.png">
Create you own empire with your most loyal allies.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Team: Shaneal Prasad and Chance Hernandez
Length: 1.5 week sprint

User Model Example:

| Parameters | Value                | Description         | Example                         |
|-----------:|----------------------|---------------------|---------------------------------|
| Username   | String               | User`s desired name | "b00oo00m3r4ng"                 |
| Firstname  | String               | User`s firstname    | "Shaneal"                       |
| Lastname   | String               | User`s lastname     | "Prasad"                        |
| Email      | String               | User`s email        | "shanealprasadsp@gmail.com"     |
| Password   | String               | User`s password     | "************"                  |
| Friends    | List of User Objects | User`s friends      | [{users Object},{users Object]] |


Clan Model Example: 

| Parameters | Value  | Description         | Example                         |
|-----------:|--------|---------------------|---------------------------------|
| clanname   | String | Clan`s desired name | "Redwood Code Academy"          |
| clanleader | String | Clan`s clan leader  | {users Object}                  |
| clanmember | String | Clan`s clan members | [{users Object},{users Object}] |

Clans Request Model Example:

|  Parameters | Value          | Description         | Example                          |
|------------:|----------------|---------------------|----------------------------------|
| user1       | {users Object} | Clan`s desired name | "Redwood Code Academy"           |
| user2       | {users Object} | Clan`s clan leader  | {users Object}                   |
| clan        | {clans Object} | Clan`s clan members | [{users Object},{users Object}]  |
| message     | String         | User messgae        | "I would love to join your clan" |
| RequestType | String         | Request type        | "Clan Request"                   |

Direct Messages Model Example: 

|  Parameters | Value          | Description                  | Example                                           |
|------------:|----------------|------------------------------|---------------------------------------------------|
| user1       | {users Object} | "User sending the request"   | {users Object}                                    |
| user2       | {users Object} | "User receiving the request" | {users Object}                                    |
| RequestType | String         | Clan`s clan members          | "Direct Message"                                  |
| message     | String         | User message                 | "Hey, have you checked out Redwood Code Academy?" |

Friend Request Model Example:

|  Parameters | Value          | Description                  | Example          |
|------------:|----------------|------------------------------|------------------|
| user1       | {users Object} | "User sending the request"   | {users Object}   |
| user2       | {users Object} | "User receiving the request" | {users Object}   |
| RequestType | String         | "Request Type"               | "Friend Request" |

Technologies Used: HTML5, CSS3, Javascript, AngularJS, C#, ASP.Net MVC, and Entity Framework.
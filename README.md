<img src="./READMEPic/login.png">

<h1>GameBook</h1>

GameBook is a social media platform that brings together gamers from all around the world. Create a profile find your friends and build your own gaming empire. 

|  Technologies    |
|-----------------:|
| HTML             |
| CSS              |
| Bootstrap        |
| JavaScript       |
| AngularJS        |
| C#               |
| ASP.NET MVC      |
| Entity Framework |


<img src="./READMEPic/final.png">

<h2>Team: Shaneal Prasad and Chance Hernandez</h2>
<h3>Length: 1.5 week sprint</h3>

<h3>User Model Example:</h3>

| Parameters | Value                | Description         | Example                         |
|-----------:|----------------------|---------------------|---------------------------------|
| Username   | String               | User`s desired name | "b00oo00m3r4ng"                 |
| Firstname  | String               | User`s firstname    | "Shaneal"                       |
| Lastname   | String               | User`s lastname     | "Prasad"                        |
| Email      | String               | User`s email        | "shanealprasadsp@gmail.com"     |
| Password   | String               | User`s password     | "************"                  |
| Friends    | List of User Objects | User`s friends      | [{users Object},{users Object]] |


<h3>Clans Request Model Example:</h3>

|  Parameters | Value          | Description         | Example                          |
|------------:|----------------|---------------------|----------------------------------|
| user1       | {users Object} | Clan`s desired name | "Redwood Code Academy"           |
| user2       | {users Object} | Clan`s clan leader  | {users Object}                   |
| clan        | {clans Object} | Clan`s clan members | [{users Object},{users Object}]  |
| message     | String         | User messgae        | "I would love to join your clan" |
| RequestType | String         | Request type        | "Clan Request"                   |

<h3>Direct Messages Model Example:</h3>

|  Parameters | Value          | Description                  | Example                                           |
|------------:|----------------|------------------------------|---------------------------------------------------|
| user1       | {users Object} | "User sending the request"   | {users Object}                                    |
| user2       | {users Object} | "User receiving the request" | {users Object}                                    |
| RequestType | String         | Clan`s clan members          | "Direct Message"                                  |
| message     | String         | User message                 | "Hey, have you checked out Redwood Code Academy?" |

<h3>Challenges</h3>
    <ul>
        <li>understanding how to make requests functional</li>
        <li>implementing Esports API</li>
        <li>implementing a 3rd party slider</li>
    </ul>
GameBook is a social media platform that brings together gamers from all around the world. Create a profile find your friends and build your own gaming empire.

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
Length: 1 week sprint

| Parameters | Value                | Description       | Example                         |
|-----------:|----------------------|-------------------|---------------------------------|
| Username   | String               | User desired name | "b00oo00m3r4ng"                 |
| Firstname  | String               | User firstname    | "Shaneal"                       |
| Lastname   | String               | User lastname     | "Prasad"                        |
| Email      | String               | User email        | "shanealprasadsp@gmail.com"     |
| Password   | String               | User password     | "************"                  |
| Friends    | List of User Objects | User friends      | [{users Object},{users Object]] |

Clan Model Example: 
{
    Id: 1,
    clanname: "Redwood Code Academy",
    clanleader: [
        {
            Id: 1,
            Username: "b00oo00m3r4ng",
            Firstname: "Shaneal",
            Lastname: "Prasad",
            Email: "shanealprasadsp@gmail.com",
            Password: *********,
            ProfilePic: "picture.jpg",
            Friends: [friends list]
        }
    ]
    clanmembers: [
        {
            Id: 1,
            Username: "b00oo00m3r4ng",
            Firstname: "Shaneal",
            Lastname: "Prasad",
            Email: "shanealprasadsp@gmail.com",
            Password: *********,
            ProfilePic: "picture.jpg",
            Friends: [friends list]
        }
    ]
}

Clans Request Model Example:
{
    Id: 1,
    user1: 
    {
        Id: 1,
        Username: "b00oo00m3r4ng",
        Firstname: "Shaneal",
        Lastname: "Prasad",
        Email: "shanealprasadsp@gmail.com",
        Password: *********,
        ProfilePic: "picture.jpg",
        Friends: [friends list]
    }
    user2:
    {
        Id: 2,
        Username: "CHAKA_CHAKA",
        Firstname: "Chance",
        Lastname: "Hernandez",
        Email: "chance.hernandez24@gmail.com",
        Password: *********,
        ProfilePic: "picture.jpg",
        Friends: [friends list]
    }
    clan:
    {
        {
            Id: 1,
            clanname: "Redwood Code Academy",
            clanleader: 
            [
                {
                    Id: 1,
                    Username: "b00oo00m3r4ng",
                    Firstname: "Shaneal",
                    Lastname: "Prasad",
                    Email: "shanealprasadsp@gmail.com",
                    Password: *********,
                    ProfilePic: "picture.jpg",
                    Friends: [friends list]
                }
            ]
            clanmembers: 
            [
                {
                    Id: 1,
                    Username: "b00oo00m3r4ng",
                    Firstname: "Shaneal",
                    Lastname: "Prasad",
                    Email: "shanealprasadsp@gmail.com",
                    Password: *********,
                    ProfilePic: "picture.jpg",
                    Friends: [friends list]
                }
            ]
        }    
    }
}

Technologies Used: HTML5, CSS3, Javascript, AngularJS, C#, ASP.Net MVC, and Entity Framework.
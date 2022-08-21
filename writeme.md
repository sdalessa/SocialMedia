1. npm install express mongoose dotenv morgan helmet nodemon    
2. dotenv gives secret url to encrypt our db
3. Helmet prevents vulnerability
4. morgan is middleware to test our requests 
5. sketchy dude in the video adds || req.user.isAdmin in the parenthesis after req.params.id. I had to remove it because it was breaking my code, and giving an "undefined" error. Basically isAdmin returns or is resulting into undefined error. Looks like I must find a new way to check admin status
6. In this system apparently, the user that is able to log in, is also able to delete their own account. I am not sure I find this extremely logical, but we have to see how this all looks in the front end as well. 
7. the follow / unfollow should rather be a toggle! It does not make sense to throw an error that says "You have already unfollowed this user"! There should not be such an option!
8. Because I want the stats to belong to the users profile, but they at the same time will have to be posted.. I am uncertain in which of the schemas they ought to be included. 
9. For the moment what I am doing is I open the braces into Postman and give for example the points, or rebounds. What I want to do is create a specific set of keys that are fixed to that object which could be reused like a schema in itself.
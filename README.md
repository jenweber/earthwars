### EarthWars - a General Assembly capstone project by Jen Weber
Your office or school is the battleground. At stake - Planet Earth itself. Who will prevail?

[Deployed Site](http://jenweber.github.io/earthwars/)
[API hosted on Heroku](https://earth-wars-api.herokuapp.com/)
[Back End Repository on GitHub](https://github.com/jenweber/earthwars-api)

EarthWars is a web app made with Ember front-end framework and Rails API. It is an app that helps organizations, teams, and businesses to drive participation in Earth Week.

### Screenshot of Deployed App
![screenshot of Earthwars app](https://bucketimgoinghome.s3.amazonaws.com/2016-04-08/9fe652ba8d0c218fcba9a4493a10a020)

### User Stories
- A new visitor to the site may register their organization to participate
- An employee or member of that organization can sign up to participate
- All users can sign up/in/out and change password through the navbar
- After a user has signed up or in, they are redirected to the activities page
- After a user designated as an admin has signed in, they are redirected to the admin dashboard
- An admin can see all the activities logged by users at their organization
- A user can log new activities and assign them a score
- A user can view their total number of activities logged and total score

### Wireframes
[Initial design](https://drive.google.com/file/d/0BxL5EMSDOzzwaUM2a1VjSUttMEk/view?usp=sharing)

### Technologies
Ember was selected as a framework due to its strengths handling changing data. If a user logs an activity, many things must re-render, such as the score, the past activities, and in the future, a leaderboard.

Rails provides an ideal back end, since tracking organizations, their users, and activities requires a relational database. I appreciated the templating functionality of rails, which made for a speedy initial setup and straightforward debugging. The information that a user can see (or not) is controlled with auth and an admin boolean.

### Future Features:
- An admin dashboard with graphs to display user participation
- A "Challenge" function where users can steal points from each other, or take a stand to defend their scores
- Standardized user actions and point values
- Admin moderation of activities logged and approved users
- A leaderboard for users to see where they stand
- Instructions/Guidance for admins to help their teams get excited to participate
- Registration codes for new users joining an organization

### Approach
This idea came to me when I was trying to think of an app that could advance the cause of energy efficiency and sustainable practices. I reflected on Cialdini's Principles of Influence to brainstorm some ways to get users interested and keep them engaged. Coupled with some employer-sponsored prizes, when all future features are complete, the capture-the-flag style competition between users will make this lively. Organization admins are encouraged to do a daily raffle, where each employee gets one raffle ticket per their points. This way, all users will want to participate, even if they are not in the lead.

After completing initial user stories and wireframes, I put together a basic API. After everything checked out with curl requests, I got started with unauthenticated CRUD from the front end. When that worked, I turned on authentication, then worked on authenticated actions from the front end. The most difficult challenges came from Ember. It is great for handling lists of things, but less great when you want customized behavior for different types of objects, or working with data from different back end models on the same front-end page.

### ERD - Entity Relationship Diagram
![ERD - Entity Relationship Diagram](https://bucketimgoinghome.s3.amazonaws.com/2016-04-08/e362a7911179d5b739cef7834cdb3440)

### Unsolved Problems and Hurdles
Deploying the Ember app proved to be the most difficult unsolved problem, absorbing an entire day of work. I discovered that when you stick to the core features of Ember, it's great. Straying away to do custom things makes work much more difficult. There were many times where I knew it was a 5 minute JQuery solution but a 5 hour Ember task. I feel that I have a much better sense now of what is easy and what is hard in Ember, so I can plan my future apps to be done "the Ember way."

### Dependencies
To run the front and back end repos from localhost, select the master branch on each. For the front end, in bash, npm install and then bower install. Start your ember server with ember s --proxy localhost:3000. For the back end, bundle install, and then rails s to start the server.

# sei-quizzapp

This is an app that allows users to create quizzes related to a certain topic (in this case software engineering). All users have access to the flashcards, so that it is easy for classes to share knowledge. 

## Deployment Link
[https://git.heroku.com/quizzapp.git](https://quizzapp-88d607683c8a.herokuapp.com/)https://quizzapp-88d607683c8a.herokuapp.com/


## 🚀 Getting started  
- Clone the github repository
- Move into the client folder with ```cd client```
- To start the frontend: ```npm start```
- To start the serverside: ```npm run serve```
  → you should a notification in the terminal that a database connection has been established, and the port is listening.


## 👩‍💻 Technologies used
- Express
- React
- Bootstrap

## 📈 Planning
For this project, a challenge was definitely communication. Working remotely with 3 different people made it quite important that we all check in with each other frequently, so that we would not do double work, or break each other’s code. 
Another challenge was designing the error handling in such a way that the user is kept in the loop about what is going on ‘behind the scenes’, and knows what went wrong in case something does. 
We initially wanted to make it possible for users to not only create different questions, but also quizzes. However, we limited the possible actions to creating, updating and deleting questions because we were worried too many quizzes would start to be created, which could make the app quite unpleasant to use. 

We created a wireframe with excalidraw: \
![image](https://github.com/NLie2/sei-quizzapp/assets/99728936/f1a659d1-5954-4f5c-b734-1e663d255997)
![image](https://github.com/NLie2/sei-quizzapp/assets/99728936/b8be9a60-4f1f-4714-a2bb-319db079390e)
![image](https://github.com/NLie2/sei-quizzapp/assets/99728936/f325109e-393e-4522-b410-ee406a96bf2a)


## 💪 Wins
- It was also the first time I created a full-stack application and ‘connecting’ front end and backend proved to be somewhat challenging. However, it also made many things fall about react and express fall into place.
- I am happy about the way we organised routing, and how we set up our data models.
- I am quite happy with the design and elements like the carousel.


## 🔑 Key Takeaways
A key takeaway was definitely to communicate a lot when working in a group. This can include verbal communication via standups, and check-ins, but also “non-verbal”, such as commenting your code. 
Also, planning is very crucial when you set up your routes. I think we were quite successful at determining in the very beginning which routes the user could hit, and which actions they could perform on the database. 

## 🔮 Future Improvements
I still want to fix the bug where two buttons appear per question instead of one. 
I would also like to make it possible for selected users (with an admin status) to create new quizzes, and new topics, to make the app more broadly usable
A next step would be to save learning progress per user, and allow them to revise cards that they have not used yet. 




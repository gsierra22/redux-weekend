# Project Name

Redux Input Sheet

## Description

I created a feedback page that take a user's input. By using react-redux, the app saves the input in the store and displays all of the input in the review page once the user reaches that point. If the user wants to redo the form then they click a button that redirects them to the first page. Otherwise, the information is saved to a database and the user is directed to a thank you page where they can choose to enter another form. The buttons are linked to routes and functions that take you to the next page and runs a function that saves the information on the store the moment it is clicked. If the first three components are empty, then the button is disabled. This was done by running a ternary operator. If the the value is great than 0 then the button is clickable, otherwise it is disabled. I had to create a router and connect it to the server in order to make the post route work. I called it in the review component. What it does is that it takes whatever is saved in the store and sends it to the database.

### Technologies

Javascript
HTML
CSS
React
Redux
Material UI
Node.js
Express
Postgres SQL

### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

### ADMIN SECTION

- Display all of the existing feedback at the route `/admin`. The most recently added feedback should appear at the top of the list. Allow the user to delete existing feedback. Prompt the user to confirm prior to deleting the feedback from the database.

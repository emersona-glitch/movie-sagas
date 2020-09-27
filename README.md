# REDUX-SAGAS MOVIE LIST

## Description

_Duration: Weekend Project_

With this project, I wanted to create an app that would be able to show off what I had recently learned with React-Redux and Sagas. The app allows users to maintain a list of favorite movies, including details about those movies, as well as an image. Information on movies in the user's library is stored in a database using PostgresQL.

### Prerequisites

You will need [Node.js](https://nodejs.org/en/) and the node package manager to install dependencies for this app.
You will also need [PostgresQL](https://www.postgresql.org/) to run the database for this app.

## Installation

1. Fork this repository and Clone using `git clone <repo-url.git>`
2. Install any dependencies by navigating to the project directory and using `npm install` in terminal.
3. Create a database named `saga_movies_weekend`,
4. The queries in the `database.sql` file are set up to create the table required for this project.
   The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed.
   I recommend using Postico to run the CREATE TABLE queries, as this is what I used.
7. Run `npm run server` in your terminal
8. Run `npm run client` in your terminal -- the app should automatically open in your browser.

## Usage

1. Users will see a home screen upon opening the app. From here, they can navigate to their library of movies using the "view 
2. Once satisfied, the user can click the submit button to add the task to the to-do list
3. Tasks are marked as 'Not Complete' by default.
4. Once complete, the user can mark them as 'Complete' by clicking on the item's 'Mark as Completed' button.
5. If the user wishes, they can delete all tasks that have been completed by clicking on the 'Delete all Completed Tasks'
6. Individual items can be deleted by using their 'Delete' button.

## Built With

Node, Javascript, Express, PostgresQL

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who gave me the training and guidance to complete this project. Special thanks to [Dane Smith](https://github.com/DoctorHowser), my instructor!

## Support
If you have suggestions or issues, please email [emerson.aagaard@gmail.com](emerson.aagaard@gmail.com)!

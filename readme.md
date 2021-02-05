# Candidate Data App: 

I utilized the FEC data through API to access the dataset of over 43,000 rows and have displayed the data through a table in a simple and easy to use manner.
 
This candidate dataset gives you access to information about the people running for office. 

## Objective of the Project:
* Create a sign in page using Google API.
* Create routes to get the data from external API’s.
* Create a table that can display the data’s rows and columns.
* Use Pagination to display the large amount of data in a fast and efficient manner.
* Create forms that help filter the data based on specific columns in the data.
* Create buttons that could sort the data based on a column in ascending or descending manner.
* Upload the project to a version control to update and maintain the project in the future.

## How did you accomplish the objectives?
Create a sign in page using Google API:
I used the angularx-social package and Google devloepers console to create an sign in using a Google account.

Create routes to get the data from external API’s:
Created routes in Angular and used a Node.js middleware to consume the data from external API. 

Create a table that can display the data’s rows and columns:
I used Angular material package to create the entire UI and the table. I filled the table with the data from the middleware.

Use Pagination to display the large amount of data in a fast and efficient manner:
I used server side pagination to improve the loading speed of the page  since the dataset was big. I created the UI for pagination using Angular material and used the Node.js middleware for the pagination.

Create forms that help filter the data based on specific columns in the data:
I used Angular’s Two-way binding to get the data from the user in real time and query the API based the data and display the results in the table. 

Create buttons that could sort the data based on a column in ascending or descending manner:
I used server side sorting and send requests to the extrenal API to sort the data in an ascending or descending manner.

## Front-end framework?
I used Angular 11 as the front-end framework and also used a Node.js middleware to get the data from the external API in a secure manner preventing CORS errors.

## Packages?
Angular- material:
I used Angular material for creating the user interface.

Angularx-social-login:
I used Angularx-social-login for creating the social login using Google.

## Steps for running and testing code

1) You also need to install node (version 14.15.4)

2) You need to install Angular using npm install -g @angular/cli

3) Clone the GitHub repo

4)There will be 2 folders:
->data-app
->Server

5)Inside data-app and server use npm- install to install all the packages

6) First run the middleware by going into server and using the command node server.js

7)Then go into data-app and run the angular app using ng-serve

Login using your google account and you can see the data.


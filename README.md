# Report Service server
The server for accepting the error logs and obtaining all the customers, users and app registered.

## Starting the server
---
 - Clone the repository
 - Start the mysql server(Insertion and table creation query can be found in the seperate repo of this project)
 - Open the terminal and run following commands
    - `npm install`
    - `export MYSQL_USER=<your mysql username or root>`
    - `export MYSQL_PASSWORD="<your mysql password>"`
     - `npm start`

## Project structure [src]
---
 - Starting point is index.js
 - All routes are defined in `routes.ts`
 - db connection is established in `db.ts`
 - All controllers for routes are in controllers folder


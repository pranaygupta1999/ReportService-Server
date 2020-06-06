/**
 * @author Pranay Gupta
 * @created 28 Oct 2019
 * @description The report service server starting point
 */
//So far so good
import express from 'express';
import { Express } from 'express-serve-static-core'
import { Request, Response } from 'express';
import { Route_t, routes as Routes } from './routes'


const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json({ type: ['text/plain', 'application/json'] }));
app.use(express.urlencoded({ extended: true }));
app.get('/', (_req, res) => {
    res.status(202).send('<h1>Report Service - Error logging and reporting</h1><b>GitHub Link: </b><a href="https://github.com/pranaygupta1999/ReportService-Server" >Click Here</a>');
});
app.listen(port, () => {
    console.log("\x1b[32mStarted listening on " + port +"\x1b[0m");
});


//==== Setting routes here ==============
for (var routeT in Routes) {
    var method = routeT.split(' ')[0];
    var route = routeT.split(' ')[1];

    if (method == 'GET')
        app.route(route).get(Routes[routeT]);
    if (method == 'POST')
        app.route(route).post(Routes[routeT]);

}



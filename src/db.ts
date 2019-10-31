import mysql, { Connection } from 'mysql';
const connection:Connection = mysql.createConnection({
    user: "root",
    password: "tiger",
    database: "ReportService"
});
connection.connect((err)=>{
    if(err) console.error(err);
    else console.log("Logs: \x1b[32mConnection to Mysql established\x1b[0m");
});
export default connection;
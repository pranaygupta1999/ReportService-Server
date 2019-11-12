import { Request, Response } from 'express';
import connection from '../db';
import { MysqlError, FieldInfo } from 'mysql'
import { RSA_NO_PADDING } from 'constants';

var LogControllers = {
    getAllLogs: function (req: Request, res: Response) {
        connection.query("Select * from Logs", (err, rows, _field) => {
            res.json(rows);
        })
    },
    getLog: function (req: Request, res: Response) {
        connection.query(`SELECT * FROM Logs WHERE lid= ${req.params['lid']}`, (err, rows, __field) => {
            if (!err)
                res.json(rows);
            else
                res.status(500).json({ msg: 'Could not find the log', err: err })
        })
    },
    postLog: function (req: Request, res: Response) {
        var lid: Number = req.body['lid'] ? req.body['lid'] : "DEFAULT";
        var aid: Number = req.body['aid'] ? req.body['aid'] : undefined;
        var message: String = req.body['message'] ? req.body['message'] : "";
        var logType: String = req.body['logType'] ? req.body['logType'] : "";
        var reportBy: String = req.body['reportBy'] ? req.body['reportBy'] : "";
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log("working");
        if (aid && message && logType && reportBy) {
            console.log(JSON.stringify(req.body));
            connection.query(`INSERT INTO Logs VALUES(${lid}, ${aid}, '${message}', '${logType}', '${reportBy}', DEFAULT)`, (err, rows, _field) => {
                if (!err)
                    res.status(200).json({ msg: "Success" });
                else
                    res.status(500).json({ msg: 'Could not insert the log', err: err });
            });

        }

    }
}
export default LogControllers;
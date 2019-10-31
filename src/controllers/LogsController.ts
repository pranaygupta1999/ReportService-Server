import { Request, Response } from 'express';
import connection from '../db';
import { MysqlError, FieldInfo } from 'mysql'

var LogControllers = {
    getAllLogs: function (req: Request, res: Response) {
        connection.query("Select * from Logs", (err, rows, field) => {
            res.json(rows);
        })
    },
    getLog: function (req: Request, res: Response) {
        connection.query(`SELECT * FROM Logs WHERE lid= ${req.params['lid']}`, (err, rows, field) => {
            if (!err)
                res.json(rows);
            else
                res.status(500).json({ msg: 'Could not find the log', err: err })
        })
    }
}
export default LogControllers;
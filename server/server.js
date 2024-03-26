var express = require('express');
var app = express();
const cors = require('cors');

// const config = require('./config');

var app = express();

// var axios = require("axios");

// const axiosInstance = axios.create({
//   headers: {
//     "Access-Control-Allow-Origin": "*"
//   }
// });

// axiosInstance
//   .get("/prueba")
//   .then(response => {
//     console.log(response);
//   })
//   .catch(e => console.log(e));


app.get('/create', (req, res) => {
    // const name = req.body.name;

    // app.get('/', function (req, res) {
    
        var sql = require("mssql");

        // config for your database
        var config = {
            user: 'jzamora',
            password: 'sqlserver2019',
            server: '18.219.12.59', 
            database: 'TNCH_RH' 
        };

        // connect to your database
        sql.connect(config, function (err) {
        
            if (err) console.log(err);

            // create Request object
            var request = new sql.Request();
            
            // const stored = await sproc.run_sp('');

            // query to the database and get the records
            request.execute('sp_recursos_fortia_movimientos_loadDatos', function (err, recordset) {
                
                if (err) console.log(err)
                
                // send records as a response
                res.setHeader('Content-Type', 'application/json');
                res.send(recordset.recordset);

                // var jsonObject = JSON.parse(recordset);
            });
        });
    });
    


var server = app.listen(5000, function () {
    console.log('Server is running..');
});



    // db.query("select * from tnch_rh.dbo.puesto", (err, res) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.send('valores seleccionados');
    //     }
    // })


// app.get('/tasks', (req, res) => {
//     res.send('list of all task')
// })

// app.get('/addTask', (req, res) => {
//     res.send('you can add tasks')
// })

// app.get('/deleteTask', (req, res) => {
//     res.send('deleted task')
// // })
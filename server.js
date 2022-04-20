const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Theromeofmylife!',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

//GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 4`, (err, row) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(row);
// });

//Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, results) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(results)
// });

//Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
            VALUES(?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql,params, (err, result) => {
    if(err){
        console.log(err)
    }
    console.log(result);
});

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });
//Default response for any other request (Not Found)
//this route is a catch all, important to place last or it will override other routes.
app.use((req, res) => {
    res.status(404).end();
})


//starts express.js on our port(3001)
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
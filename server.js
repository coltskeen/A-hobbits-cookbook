require("dotenv").config();
const express = require("express");
const db = require("./db/conn");
const app = express();
const path = require('path');
// const PORT = 3000;

//MIDDLEWARE
//SERVE THE STATIC FILES FROM THE REACT APP
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static("public"));


//GET REQUEST  - READ
app.get('/recipe', (req, res) => {
    db
        .query('SELECT * FROM recipe')
        .then((result) => {
            // console.log(result.rows)
            //IF THE DATA DOESN'T EXIST - RETURN 404
            if(result.rows.length === 0) return res.sendStatus(404);
            else return res.status(200).send(result.rows);
        })
        .catch((err) => {
            res.sendStatus(500)
            // throw err;
        });

})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });


// app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

app.listen(process.env.PORT, () => console.log(`Listening on PORT: ${process.env.PORT}`));

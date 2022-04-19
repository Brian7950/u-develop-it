const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Default response for any other request (Not Found)
//this route is a catch all, important to place last or it will override other routes.
app.use((req, res) => {
    res.status(404).end();
})


//starts express.js on our port(3001)
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
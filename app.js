const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("This will be the landing page soon!");
})

app.listen(3000, () => {
    console.log("YelpCamp Server Has Started!")
})
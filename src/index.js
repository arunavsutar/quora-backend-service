const express = require('express');


const app = express();


app.get('/', (req, res) => {
    return res.json({ message: "Server is Up...." });
});




app.listen(3000, () => {
    console.log("Server started at port 3000");
})
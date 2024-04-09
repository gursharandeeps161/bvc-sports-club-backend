const express = require("express");
const userRoutes = require("./routes/user")
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 7000;
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRoutes)

app.listen(PORT, ()=>{
    console.log('server is running........'+PORT)
})

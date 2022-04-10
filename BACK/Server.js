const express = require('express');
const app = express();
const cors = require('cors');
require('./Mongodb');

const platRouter = require('./route/plat_route');

app.use(express.json());
app.use(cors());

app.use(platRouter);

app.listen(3000, function(){
    console.log('Server is running on port 3000');
})
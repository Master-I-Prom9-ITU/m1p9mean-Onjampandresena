var mongoose = require('mongoose');
// const connexString = 'mongodb+srv://ekalyuser:m1p9mean@cluster0.q54xd.mongodb.net/e_kaly?retryWrites=true&w=majority';
const connexString = 'mongodb://127.0.0.1:27017/e_kaly';
mongoose.connect(connexString, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('db is connected successfully');
    }).catch(error => {
        console.log('db is not connected due to : ' + error);
    });
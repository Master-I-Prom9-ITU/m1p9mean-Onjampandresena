var mongoose = require('mongoose');
const connexString = 'mongodb+srv://wa_rakoto:wa_rakoto123456@wa22.arrrf.mongodb.net/WA22?retryWrites=true&w=majority';
// const connexString = 'mongodb://127.0.0.1:27017/e_kaly';
mongoose.connect(connexString, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('db is connected successfully');
    }).catch(error => {
        console.log('db is not connected due to : ' + error);
    });
const express = require('express');
const app = express();
const cors = require('cors');
require('./Mongodb');

const commandeRouter = require('./route/commande_route');
const livreurRouter = require('./route/livreur_route');
const platRouter = require('./route/plat_route');
const profilRouter = require('./route/profil_route');
const restaurantRouter = require('./route/restaurant_route');
const userRouter = require('./route/user_route');

app.use(express.json());
app.use(cors());

app.use(commandeRouter);
app.use(livreurRouter);
app.use(platRouter);
app.use(profilRouter);
app.use(restaurantRouter);
app.use(userRouter);

app.listen(3000, function(){
    console.log('Server is running on port 3000');
})
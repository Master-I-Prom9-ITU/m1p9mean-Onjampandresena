show dbs

use e_kaly
db
db.profil.insert({id: "CUSTO", designation:"customer"})
db.profil.insert({id: "EKALY", designation:"e-kaly"})
db.profil.insert({id: "RESTO", designation:"Restaurant"})
db.profil.insert({id: "DELIV", designation:"Livreur"})
db.profil.insert({id: "DELIV", test:"Livreur"})
db.profil.find({})

db.Plat.({Nom
Description
Categorie
Image
Prix
Restaurant})


db.createCollection( test_collection,
   {
      champ1: number,
      champ2: string
   }
)

db.createCollection( profil,
   {
        id
        designation
   }
)

db.createCollection( User,
   {
        id
        first_name
        last_name
        birth_date
        phone_number
        email
        password
        profil_id
   }
)

db.createCollection( Delivery_man,
   {
        id
        user_id
        work_phone_number
   }
)

db.createCollection( Restaurant,
   {
        id
        name
        location -- (seat - place)

        
   }
)

db.createCollection( Flat,
   {
        id
        designation
        price
        restaurant_id
   }
)

db.createCollection( Command,
   {
        id
        user_id
        flat_id
        -- restaurant_id
        command_date
        delivery_place
        is_deliver
   }
)

db.createCollection( Delivery_costs,
   {
        id
        criteria
        costs
   }
)

db.createCollection( Delivery,
   {
        id
   }
)





















-- const MongoClient = require('mongodb').MongoClient;
-- const connectionString = 'mongodb://127.0.0.1:27017';
-- const dbName = 'e_kaly';
-- const uri = 'mongodb://127.0.0.1:27017/e_kaly';

-- const client = new MongoClient(uri);

-- async function listDatabases(client){
--     databasesList = await client.db().admin().listDatabases();
 
--     console.log("Databases:");
--     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
-- };

-- function allProfils(client){
--     profils = await client.db('e_kaly').collection('profil').find().toArray();
 
--     console.log("Profils : ");
--     profils.forEach(profil => console.log(` - ${profil.id}`));

--     // return profils;
-- };
 

-- async function getAllProfil() { 
--     try {
--         await client.connect();
    
--         await allProfils(client);
     
--     } catch (e) {
--         console.error(e);
--     }finally {
--         await client.close();
--     }
-- } 

-- module.exports = { getAllProfil };
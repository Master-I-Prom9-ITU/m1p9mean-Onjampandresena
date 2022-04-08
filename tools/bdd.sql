db.createCollection( Profil,
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


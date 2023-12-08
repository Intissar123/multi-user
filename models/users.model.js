const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModel = new Schema(
    {
   
    name: "string",
    email: {
        type: "string",
        trim: true,
        unique: true
    },
    password:  {
            type: String,
            unique: [true, 'The password is unique']
           
    },
    role: "string",
     tel:  {
            type: String,
            unique: [true, 'The tel is unique']
           
    },
    city:"string",
    country: "string",
    postalcode: "string",
    adress: "string",
},
    {
        timestamps: true,
    }
);

module.exports=mongoose.model('users', UserModel)
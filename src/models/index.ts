import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const PetSchema = new Schema({  
    name: {
        type: String,
        required: true
    },
    specie: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    tutor: {
        type: String,
        required: true
    },
    tutor_phone :{
        type: String,
    }
})

const Pet = mongoose.model('Pet', PetSchema);

export default Pet;
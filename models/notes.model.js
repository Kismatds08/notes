const mongoose = require('mongoose')

const noteSchema = mongoose.Schema(
    {
    tite: String,
    content : String,
},
{
   timestamps: true 
}
)
module.exports = mongoose.model("notes-details", noteSchema)

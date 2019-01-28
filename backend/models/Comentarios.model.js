const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogEsquema = new Schema({
    titulo: String,
    comentario: String,
},{versionKey:false,timestamps:true})
module.exports = mongoose.model('Comentarios',BlogEsquema);
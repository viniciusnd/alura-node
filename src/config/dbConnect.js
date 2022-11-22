import mongoose from "mongoose";

mongoose.connect("mongodb+srv://pedro:1810@pedro.enrtow5.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
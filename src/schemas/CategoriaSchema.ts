import mongoose, { Document, Schema } from "mongoose";

const CategoriaSchema = new Schema(
  {
    nome:{
      type: String,
      required: true,
      unique: true
    },
    descricao:{
      type: String,
      required: true,
      unique: true
    }
  }
);

const CategoriaDB = mongoose.model("Categoria", CategoriaSchema);

export { CategoriaDB };
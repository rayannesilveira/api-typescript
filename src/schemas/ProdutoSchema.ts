import mongoose, { Document, Schema } from "mongoose";

const ProdutoSchema = new Schema(
  {
    nome:{
      type: String,
      required: true,
      unique: true
    },
    preco:{
      type: Number,
      required: true,
      unique: false
    },
    quantidade:{
      type: Number,
      required: true,
      unique: false
    },
    categoria_id:{
      type: String,
      required: true,
      unique: false
    }
  }
);

const ProdutoDB = mongoose.model("Produto", ProdutoSchema);

export { ProdutoDB };
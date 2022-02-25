import mongoose, { Document, Schema } from "mongoose";
import { NIL } from "uuid";

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
      unique: true
    },
    quantidade:{
      type: Number,
      required: true,
      unique: true
    },
    categoria_id:{
      type: String,
      required: true,
      unique: true
    }
  }
);

const ProdutoDB = mongoose.model("Produto", ProdutoSchema);

export { ProdutoDB };
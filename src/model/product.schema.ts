import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    product_id: {
      type: String,
      index: { unique: true, dropDups: true },
    },
    description: String,
    price: Number,
    manufacture: String,
    category: String,
    expired: Date,
    status: Boolean,
  },
  { timestamps: true },
);



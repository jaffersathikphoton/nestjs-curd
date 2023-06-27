import { Injectable } from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';
import { Product } from './interface/product.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}
  async createProduct(data: ProductDTO): Promise<Product> {
    try {
      const product = new this.productModel(data);
      return await product.save();
    } catch (e) {
      throw new Error(e);
    }
  }
}
 
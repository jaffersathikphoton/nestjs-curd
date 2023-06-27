import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Product } from './interface/product.interface';
import { ProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('Product')
export class ProductController {
  constructor(private productService:ProductService){}
  @Post()
  async createProduct(@Body() data: ProductDTO): Promise<Product> {
    try {
      const saveProduct = await this.productService.createProduct(data);
      return  saveProduct;
    } catch (e) {
      return e;
    }
  }
}

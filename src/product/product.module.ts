import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'src/model/product.schema';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers:[ProductService,ProductResolver],
})
export class ProductModule {}

import { Resolver, Query,Mutation,Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { ProductDTO } from './dto/product.dto';
import { CreateProductInput } from './product.input';
import { CreateProductOutput } from './product.output';

@Resolver()
export class ProductResolver {
  constructor (private ProductService:ProductService){}
  @Query(() => String)
  hello(): string {
    return 'Hello, world!';
  }
  

  @Mutation(returns => CreateProductOutput )
  async createProduct(@Args('data') product: CreateProductInput) {
    return this.ProductService.createProduct(product);
  }
}

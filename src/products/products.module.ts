import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductsService } from './services/products.service';

@Module({
  controllers: [ProductController],
  providers: [ProductsService]
})
export class ProductsModule {}

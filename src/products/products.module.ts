import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductsService } from './services/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity])
  ],
  controllers: [ProductController],
  providers: [ProductsService]
})
export class ProductsModule {}

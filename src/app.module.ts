import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusModule } from './status/status.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ProductController } from './products/controllers/product.controller';

@Module({
  imports: [StatusModule, AuthModule, UsersModule, ProductsModule],
  controllers: [AppController, ProductController ],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusModule } from './status/status.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ProductController } from './products/controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [StatusModule, AuthModule, UsersModule, ProductsModule,
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'devdb-nest',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Solo para desarrollo
      logging: true,     // Muestra SQL en consola
    }),
  ],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}

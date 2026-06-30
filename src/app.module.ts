import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { AbdullohModule } from './abdulloh/abdulloh.module';

@Module({
  imports: [ProductModule, UserModule, AbdullohModule],
})
export class AppModule {}

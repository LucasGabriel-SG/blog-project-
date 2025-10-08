import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/database/database.module';
import { modelsProviders } from 'src/database/models/model.provider';

@Module({
  imports:[DatabaseModule,],
  controllers: [UserController],
  providers: [UserService, ...modelsProviders],
})
export class UserModule {}

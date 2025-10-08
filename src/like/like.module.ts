import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { DatabaseModule } from 'src/database/database.module';
import { modelsProviders } from 'src/database/models/model.provider';

@Module({
  imports: [DatabaseModule,],
  providers: [LikeService, ...modelsProviders],
  controllers: [LikeController]
})
export class LikeModule {}

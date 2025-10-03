import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { DatabaseModule } from 'src/database/database.module';
import { modelsProviders } from 'src/database/models/model.provider';

@Module({
  imports: [DatabaseModule,],
  controllers: [PostsController],
  providers: [PostsService, ...modelsProviders],
})
export class PostsModule {}

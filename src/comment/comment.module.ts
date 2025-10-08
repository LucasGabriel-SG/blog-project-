import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { DatabaseModule } from 'src/database/database.module';
import { modelsProviders } from 'src/database/models/model.provider';

@Module({
  imports: [DatabaseModule,],
  controllers: [CommentController],
  providers: [CommentService, ...modelsProviders]
})
export class CommentModule {}

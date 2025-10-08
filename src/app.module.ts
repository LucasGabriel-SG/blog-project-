import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import configuration from './config/configuration';
import { PostsModule } from './post/posts.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [
    UserModule,
    PostsModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    LikeModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './post/posts.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import configuration from './config/configuration';

@Module({
  imports: [PostsModule, UserModule,ConfigModule.forRoot({ isGlobal: true, load: [configuration],}), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

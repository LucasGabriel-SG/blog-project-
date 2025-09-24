import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { User } from './models/user.model';
import { Comment } from './models/comment.model';
import { Like } from './models/like.model';
import { Post } from './models/post.model';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
        logging: false,
      });
      sequelize.addModels([
        User,
        Comment,
        Like,
        Post
      ]);
      await sequelize.sync({
        force: true,
      });
      return sequelize;
    },
    inject: [ConfigService],
  },
];
import { Post } from "./post.model";
import { User } from "./user.model";


export const modelsProviders = [
  {
    provide: 'USER_PROVIDER', 
    useValue: User,
  },

   {
    provide: 'POST_PROVIDER', 
    useValue: Post,
  },
];
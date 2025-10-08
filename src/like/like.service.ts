import { Get, Inject, Injectable, Post } from '@nestjs/common';
import { get } from 'http';
import { Like } from 'src/database/models/like.model';

@Injectable()
export class LikeService {

   

    constructor(
    @Inject('LIKE_PROVIDER')
        private likeRepository: typeof Like
    ) {}


    async likePost (userId:number, postId:number, isLike: boolean) {

        const hasLike = await this.likeRepository.findOne({
            where:  {user_id: userId, post_id: postId}
        });


    
        if (hasLike) {
            hasLike.isLike = isLike;
            hasLike.is_active = true;
            await hasLike.save();
            return true;

        }

       
        
 
        

}
}

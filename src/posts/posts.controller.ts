import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    async createPost(@Body() dto: CreatePostDto,
                     @UploadedFile() image) {
        return await this.postsService.create(dto, image);
    }
}

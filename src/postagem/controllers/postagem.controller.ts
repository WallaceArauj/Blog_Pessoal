import { Controller, Get, HttpCode, HttpStatus, ParseIntPipe, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { PostagemService } from "../../postagem/services/postagem.service";

@ApiTags('Postagem')
@UseGuards(JwtAuthGuard)
@Controller('/postagem')
@ApiBearerAuth()
export class PostagemContoller {

    constructor(private readonly postagemService: PostagemService) { }

    @UseGuards(JwtAuthGuard)
    @Get('/postagem')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]> {
        return this.postagemService.findAll()
    }
       
}
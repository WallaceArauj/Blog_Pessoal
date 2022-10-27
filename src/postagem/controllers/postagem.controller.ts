import { Controller, Get, HttpCode, HttpStatus, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { PostagemService } from "../../postagem/services/postagem.service";


@Controller("/postagens")
export class PostagemContoller {

    constructor(private readonly postagemService: PostagemService) { }

    @UseGuards(JwtAuthGuard)
    @Get('/postagem')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]> {
        return this.postagemService.findAll()
    }

    
}
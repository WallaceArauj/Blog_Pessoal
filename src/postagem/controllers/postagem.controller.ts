import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
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
    
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise <Postagem> {
        return this.postagemService.findById(id);
    }

    findbyDescricao(@Param('descricao') descricao: string): Promise<Postagem[]> {
        return this.postagemService.findByDescricao(descricao);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.create(postagem);       
    }


    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.update(postagem);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.postagemService.delete(id)
    }

}
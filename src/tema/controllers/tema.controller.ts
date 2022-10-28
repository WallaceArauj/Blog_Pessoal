import { Body } from "@nestjs/common";
import { Post } from "@nestjs/common";
import { Param } from "@nestjs/common";
import { Put } from "@nestjs/common";
import { Delete } from "@nestjs/common";
import { HttpStatus, ParseIntPipe } from "@nestjs/common";
import { Controller, Get, HttpCode, UseGuards } from "@nestjs/common/decorators";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Tema } from "../entities/tema.entity";
import { TemaService } from "../services/tema.service";

@ApiTags('Tema')
@UseGuards(JwtAuthGuard)
@Controller('/tema')
@ApiBearerAuth()
export class TemaController{

    constructor(private readonly temaService: TemaService) {}

    @UseGuards(JwtAuthGuard)
    @Get('/tema')
    @HttpCode(HttpStatus.OK)
    findAll (): Promise<Tema[]> {
        return this.temaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise <Tema> {
        return this.temaService.findById(id);
    }

    findbyDescricao(@Param('descricao') descricao: string): Promise<Tema[]> {
        return this.temaService.findByDescricao(descricao);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Tema: Tema): Promise<Tema> {
        return this.temaService.create(Tema);
        
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Tema: Tema): Promise<Tema> {
        return this.temaService.update(Tema);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.temaService.delete(id)
    }
}
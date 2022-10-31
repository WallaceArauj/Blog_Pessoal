import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger/dist";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../Services/usuario.service";


@ApiTags('Usuario')
@Controller('/usuario')
export class UsuarioController{
    constructor(private readonly usuarioService: UsuarioService){}
        
        @ApiBearerAuth()
        @UseGuards(JwtAuthGuard)
        @Get('/all')
        @HttpCode(HttpStatus.OK)
        findAll (): Promise<Usuario[]>{
            return this.usuarioService.findAll();
        }

        @HttpCode(HttpStatus.CREATED)
        @Post('/cadastrar')
        async create(@Body() usuario: Usuario): Promise<Usuario> {
            return await this.usuarioService.create(usuario);
        }

        @ApiBearerAuth()
        @Put('/atualizar')
        @HttpCode(HttpStatus.OK)

        async update (@Body() usuario: Usuario): Promise<Usuario> {
            return this.usuarioService.update(usuario);
        }
}
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemContoller } from "../postagem/controllers/postagem.controller";
import { PostagemService } from "../postagem/services/postagem.service";
import { Postagem } from "./entities/postagem.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    providers: [PostagemService],
    controllers: [PostagemContoller],
    exports: [TypeOrmModule]
})
export class PostagemModule { }
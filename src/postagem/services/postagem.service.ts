import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { Repository } from "typeorm";

@Injectable()
export class PostagemService {

    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem> //assíncrona
    ) { }

    async findAll(): Promise<Postagem[]> {
        return await this.postagemRepository.find()
    }

    async findById (id: number): Promise <Postagem> {
        let postagem = await this.postagemRepository.findOne({
            where: {
                id
            }
        });

        if (!postagem)
        throw new HttpException('Tema não encontrado!' ,HttpStatus.NOT_FOUND);

        return postagem; 
    }

}

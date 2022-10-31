import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class PostagemService {

    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem> //assíncrona
    ) {}

    async findAll(): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            relations: {
                tema: true
            }
        });
    }

    async findById (id: number): Promise <Postagem> {
        let postagem = await this.postagemRepository.findOne({
            where: {
                id
            },
            relations: {
                tema: true
            }
        });

        if (!postagem)
        throw new HttpException('Tema não encontrado!' ,HttpStatus.NOT_FOUND);

        return postagem; 
    }

    async findByDescricao (descricao: string): Promise <Postagem[]>{
        return await this.postagemRepository.find({})

    }

    
    async create (postagem: Postagem): Promise<Postagem>{
    return await this.postagemRepository.save(postagem);

    }

    async update (postagem: Postagem): Promise<Postagem>{

        let buscaPostagem = await this.findById(postagem.id);

        if(!buscaPostagem || !postagem.id)
        throw new HttpException ('Tema não encontrado!',HttpStatus.NOT_FOUND);

        return await this.postagemRepository.save(postagem);
    }

    async delete (id: number): Promise<DeleteResult> {
        let buscaPostagem = await this.findById(id);

        if (!buscaPostagem)
        throw new HttpException ('Postagem não Encontrado!', HttpStatus.NOT_FOUND);

        return await this.postagemRepository.delete(id);

    }

}

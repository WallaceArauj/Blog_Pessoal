import { IsNotEmpty } from 'class-validator'
import { Tema } from '../../tema/entities/tema.entity'
import { Usuario } from '../../usuario/entities/usuario.entity'
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity({ name: 'tb_postagens' })
export class Postagem {

    @ApiProperty({ type: () => Tema})
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    @ApiProperty()
    titulo: string

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    @ApiProperty()
    texto: string

    @UpdateDateColumn()
    @ApiProperty()
    data: Date

    @ApiProperty()
    @ManyToOne(() => Tema, (tema) => tema.postagem,{
        onDelete: "CASCADE"
    })
    tema: Tema;

    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: 'CASCADE'
    })
    usuario: Usuario;
}
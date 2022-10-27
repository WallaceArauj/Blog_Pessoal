import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PostagemModule } from './postagem/postagem.module';
import { TemaModule } from './tema/entities/tema.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogpessoal',
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

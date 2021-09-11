import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn,
UpdateDateColumn } from "typeorm";

@Entity()
export class Cadastro{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Nome: string;

    @Column()
    RA: string;

    @Column()
    Idade: number;

    @Column()
    Data_Nascimento: string;

    @Column()
    Endereco: string;

    @Column({
        default: false
    })
    Matriculado: boolean;
}
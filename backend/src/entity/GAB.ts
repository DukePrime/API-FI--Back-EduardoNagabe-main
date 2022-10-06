import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Gab {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    curso: string;
    
    @Column()
    campus: string;
    
    @Column()
    contato:String;
    
    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

}
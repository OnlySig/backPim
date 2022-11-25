import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    placa: string

    @Column()
    name: string

    @Column()
    status: string
    
    @Column()
    data: string

    @Column()
    modelo: string

    @Column()
    pagamento: string
}
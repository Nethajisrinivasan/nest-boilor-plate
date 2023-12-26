import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('gender')
export class Gender{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @CreateDateColumn()
    createdAt: Date;
  
    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'createdBy' })
    createdBy: number;
  
    @UpdateDateColumn({ nullable: true })
    updatedAt: Date;
  
    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'updatedBy' })
    updatedBy: number;
  
    @DeleteDateColumn({ nullable: true })
    deletedAt: Date;
  
    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'deletedBy' })
    deletedBy: number;
  
    @Column({ default: true })
    isActive: boolean;
}

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    mobile:string;

    @ManyToOne(() => Gender, (gender) => gender.id)
    @JoinColumn({ name: 'genderId' })
    genderId: number;

    @CreateDateColumn()
    createdAt: Date;
  
    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'createdBy' })
    createdBy: number;
  
    @UpdateDateColumn({ nullable: true })
    updatedAt: Date;
  
    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'updatedBy' })
    updatedBy: number;
  
    @DeleteDateColumn({ nullable: true })
    deletedAt: Date;
  
    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'deletedBy' })
    deletedBy: number;
  
    @Column({ default: true })
    isActive: boolean;

}

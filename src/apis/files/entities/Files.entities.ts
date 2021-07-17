import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Files extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', primary: true })
  url: string;

  @Column({ type: 'text' })
  filename: string;

  @Column({ type: 'text' })
  mimetype: string;

  @CreateDateColumn()
  createdAt: Date;
}

export default Files;

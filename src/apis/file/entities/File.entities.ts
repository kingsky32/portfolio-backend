import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class File extends BaseEntity {
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

export default File;

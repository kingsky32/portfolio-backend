import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  getRepository,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Files from '../../files/entities/Files.entities';
import Codes from '../../codes/entities/Codes.entities';

@Entity()
class Projects extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true })
  accountId: number;

  @ManyToOne(type => Codes, code => code.code, { nullable: true })
  type: Codes;

  @ManyToOne(type => Codes, code => code.code, { nullable: true })
  platform: Codes;

  @Column({ type: 'text', nullable: true })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  meta: string;

  @OneToOne(type => Files, file => file.id, { nullable: true })
  @JoinColumn()
  thumbnail: Files;

  @Column({ type: 'text', nullable: true })
  github: string;

  @Column({ type: 'text', nullable: true })
  page: string;

  @Column({ type: 'text', array: true, nullable: true })
  tools: Codes[];

  @Column({ type: 'timestamptz', nullable: true })
  startAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  endAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  static findAll = () =>
    getRepository(Projects).find({ relations: ['thumbnail', 'type', 'platform'] });
}

export default Projects;

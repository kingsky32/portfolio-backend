import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Files from '../../files/entities/Files.entities';
import Codes from '../../codes/entities/Code.entities';
import { CodeProps } from '../../codes/types/codes';
import { ProjectPlatformType } from '../types/projects';

@Entity()
class Projects extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true })
  accountId: number;

  @ManyToOne(type => Codes, code => code.code, { nullable: true })
  platform: ProjectPlatformType;

  @Column({ type: 'text', nullable: true })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  meta: string;

  @OneToOne(type => Files, file => file.id, { nullable: true })
  @JoinColumn()
  thumbnail: number;

  @Column({ type: 'text', nullable: true })
  github: string;

  @Column({ type: 'text', nullable: true })
  page: string;

  @OneToMany(type => Codes, code => code.code)
  tools: CodeProps[];

  @Column({ type: 'timestamptz', nullable: true })
  startAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  endAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Projects;

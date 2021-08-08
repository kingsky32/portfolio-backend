import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Codes from '../../codes/entities/Code.entities';
import { CodeProps } from '../../codes/types/codes';
import { ProjectPlatformType, ProjectTypeTypes } from '../types/projects';

@Entity()
class Projects extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true })
  accountId: number;

  @Column({ type: 'text', nullable: true })
  type: ProjectTypeTypes;

  @Column({ type: 'text', nullable: true })
  platform: ProjectPlatformType;

  @Column({ type: 'text', nullable: true })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  meta: string;

  @Column({ type: 'int', nullable: true })
  thumbnail: number;

  @Column({ type: 'text', nullable: true })
  github: string;

  @Column({ type: 'text', nullable: true })
  page: string;

  @OneToMany(type => Codes, code => code.code)
  tools: CodeProps[];

  @Column({ type: 'date', nullable: true })
  startAt: Date;

  @Column({ type: 'date', nullable: true })
  endAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Projects;

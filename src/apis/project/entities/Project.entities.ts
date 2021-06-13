import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProjectPlatformType, ProjectToolTypes, ProjectTypeTypes } from '../types/project';

@Entity()
class Project extends BaseEntity {
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
  caption: string;

  @Column({ type: 'int', nullable: true })
  thumbnail: number;

  @Column({ type: 'text', nullable: true })
  github: string;

  @Column({ type: 'text', nullable: true })
  page: string;

  @Column({ type: 'text', array: true, nullable: true })
  tools: ProjectToolTypes[];

  @Column({ type: 'date', nullable: true })
  startAt: Date;

  @Column({ type: 'date', nullable: true })
  endAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Project;

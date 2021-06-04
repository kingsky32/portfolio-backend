import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

enum ProjectPlatform {
  "web",
  "app",
}

enum ProjectType {
  "develop",
  "design",
}

enum ProjectTools {
  "react",
  "react-native",
  "graphql",
  "prisma",
  "firebase",
  "styled-components",
}

@Entity()
class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  accountId: number;

  @Column({ type: "string" })
  type: ProjectType;

  @Column({ type: "string" })
  platform: ProjectPlatform;

  @Column({ type: "text" })
  title: string;

  @Column({ type: "int" })
  thumbnail: number;

  @Column({ type: "string" })
  github: string;

  @Column({ type: "string" })
  page: string;

  @Column({ type: "array" })
  tools: ProjectTools[];

  @Column({ type: "datetime" })
  startAt: Date;

  @Column({ type: "datetime" })
  endAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Project;

import { BaseEntity, Column, Entity } from 'typeorm';

@Entity()
class Codes extends BaseEntity {
  @Column({ type: 'text', primary: true })
  code: string;

  @Column({ type: 'text' })
  label: string;
}

export default Codes;

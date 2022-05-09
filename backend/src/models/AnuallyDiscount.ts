import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('anually_discount')
class AnuallyDiscount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  discount: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default AnuallyDiscount;

import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../core/entities/base.entity';

@Entity('products')
export class ProductEntity extends BaseEntity {

  @Column({ type: 'varchar', length: 150, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  @Column({ type: 'integer', nullable: false, default: 0 })
  stock: number;
}

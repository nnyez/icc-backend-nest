import { IsNotEmpty, IsNumber, MinLength, MaxLength, IsPositive } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MinLength(3)
  @MaxLength(150)
  name: string;

  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  @MinLength(5)
  description: string;

  @IsNotEmpty({ message: 'El precio es obligatorio' })
  @IsNumber({}, { message: 'El precio debe ser un número' })
  @IsPositive({ message: 'El precio debe ser mayor a 0' })
  price: number;

  @IsNotEmpty({ message: 'El stock es obligatorio' })
  @IsNumber({}, { message: 'El stock debe ser un número' })
  @IsPositive({ message: 'El stock debe ser mayor a 0' })
  stock: number;
}

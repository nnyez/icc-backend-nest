import { IsNotEmpty, IsNumber, MinLength, MaxLength, IsPositive } from "class-validator";

export class UpdateProductDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(150)
  name: string;

  @IsNotEmpty()
  @MinLength(5)
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  stock: number;
}

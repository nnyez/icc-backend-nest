import { IsOptional, IsNumber, MinLength, MaxLength, IsPositive } from "class-validator";

export class PartialUpdateProductDto {
  @IsOptional()
  @MinLength(3)
  @MaxLength(150)
  name?: string;

  @IsOptional()
  @MinLength(5)
  description?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  price?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  stock?: number;
}

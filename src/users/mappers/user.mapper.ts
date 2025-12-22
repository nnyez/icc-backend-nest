import { User } from "../entities/user.entity";
import { CreateUserDto } from "../dtos/create-user.dto";

export class UserMapper {
  static toEntity(id: number, dto: CreateUserDto) {
    return new User(id, dto.name, dto.email);
  }

  static toResponse(entity: User) {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
    };
  }
}
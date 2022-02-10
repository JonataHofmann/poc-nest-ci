import { User } from './entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createUser = async (userDTO: CreateUserDto) => {
    return await this.save(userDTO);
  };
}

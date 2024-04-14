import { Injectable } from '@nestjs/common';
import { CreatePathInput } from './dto/create-path.input';
import { UpdatePathInput } from './dto/update-path.input';

@Injectable()
export class PathsService {
  create(createPathInput: CreatePathInput) {
    return 'This action adds a new path';
  }

  findAll() {
    return `This action returns all paths`;
  }

  findOne(id: number) {
    return `This action returns a #${id} path`;
  }

  update(id: number, updatePathInput: UpdatePathInput) {
    return `This action updates a #${id} path`;
  }

  remove(id: number) {
    return `This action removes a #${id} path`;
  }
}

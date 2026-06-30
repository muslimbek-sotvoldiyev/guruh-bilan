import { Injectable } from '@nestjs/common';
import { CreateAbdullohDto } from './dto/create-abdulloh.dto';
import { UpdateAbdullohDto } from './dto/update-abdulloh.dto';

@Injectable()
export class AbdullohService {
  create(createAbdullohDto: CreateAbdullohDto) {
    return 'This action adds a new abdulloh';
  }

  findAll() {
    return `This action returns all abdulloh`;
  }

  findOne(id: number) {
    return `This action returns a #${id} abdulloh`;
  }

  update(id: number, updateAbdullohDto: UpdateAbdullohDto) {
    return `This action updates a #${id} abdulloh`;
  }

  remove(id: number) {
    return `This action removes a #${id} abdulloh`;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbdullohService } from './abdulloh.service';
import { CreateAbdullohDto } from './dto/create-abdulloh.dto';
import { UpdateAbdullohDto } from './dto/update-abdulloh.dto';

@Controller('abdulloh')
export class AbdullohController {
  constructor(private readonly abdullohService: AbdullohService) {}

  @Post()
  create(@Body() createAbdullohDto: CreateAbdullohDto) {
    return this.abdullohService.create(createAbdullohDto);
  }

  @Get()
  findAll() {
    return this.abdullohService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abdullohService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbdullohDto: UpdateAbdullohDto) {
    return this.abdullohService.update(+id, updateAbdullohDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.abdullohService.remove(+id);
  }
}

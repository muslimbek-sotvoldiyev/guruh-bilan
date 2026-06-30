import { PartialType } from '@nestjs/mapped-types';
import { CreateAbdullohDto } from './create-abdulloh.dto';

export class UpdateAbdullohDto extends PartialType(CreateAbdullohDto) {}

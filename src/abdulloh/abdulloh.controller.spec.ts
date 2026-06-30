import { Test, TestingModule } from '@nestjs/testing';
import { AbdullohController } from './abdulloh.controller';
import { AbdullohService } from './abdulloh.service';

describe('AbdullohController', () => {
  let controller: AbdullohController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbdullohController],
      providers: [AbdullohService],
    }).compile();

    controller = module.get<AbdullohController>(AbdullohController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

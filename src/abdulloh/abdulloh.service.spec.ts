import { Test, TestingModule } from '@nestjs/testing';
import { AbdullohService } from './abdulloh.service';

describe('AbdullohService', () => {
  let service: AbdullohService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbdullohService],
    }).compile();

    service = module.get<AbdullohService>(AbdullohService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

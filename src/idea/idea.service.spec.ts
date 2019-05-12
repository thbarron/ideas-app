import { Test, TestingModule } from '@nestjs/testing';
import { IdeaService } from './idea.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeaEntity } from './idea.entity';
import { IdeaController } from './idea.controller';

describe('IdeaService', () => {
  let service: IdeaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature(), IdeaEntity],
      controllers: [IdeaController],
      providers: [IdeaService],
    }).compile();

    service = module.get<IdeaService>(IdeaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

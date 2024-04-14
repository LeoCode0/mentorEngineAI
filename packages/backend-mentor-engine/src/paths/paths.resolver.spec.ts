import { Test, TestingModule } from '@nestjs/testing';
import { PathsResolver } from './paths.resolver';
import { PathsService } from './paths.service';

describe('PathsResolver', () => {
  let resolver: PathsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PathsResolver, PathsService],
    }).compile();

    resolver = module.get<PathsResolver>(PathsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

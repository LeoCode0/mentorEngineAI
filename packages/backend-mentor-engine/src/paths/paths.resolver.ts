import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PathsService } from './paths.service';
import { Path } from './entities/path.entity';
import { CreatePathInput } from './dto/create-path.input';
import { UpdatePathInput } from './dto/update-path.input';

@Resolver(() => Path)
export class PathsResolver {
  constructor(private readonly pathsService: PathsService) {}

  @Mutation(() => Path)
  createPath(@Args('createPathInput') createPathInput: CreatePathInput) {
    return this.pathsService.create(createPathInput);
  }

  @Query(() => [Path], { name: 'paths' })
  findAll() {
    return this.pathsService.findAll();
  }

  @Query(() => Path, { name: 'path' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pathsService.findOne(id);
  }

  @Mutation(() => Path)
  updatePath(@Args('updatePathInput') updatePathInput: UpdatePathInput) {
    return this.pathsService.update(updatePathInput.id, updatePathInput);
  }

  @Mutation(() => Path)
  removePath(@Args('id', { type: () => Int }) id: number) {
    return this.pathsService.remove(id);
  }
}

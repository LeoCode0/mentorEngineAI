import { Module } from "@nestjs/common";
import { PathsService } from "./paths.service";
import { PathsResolver } from "./paths.resolver";

@Module({
  providers: [PathsResolver, PathsService],

})
export class PathsModule {
}

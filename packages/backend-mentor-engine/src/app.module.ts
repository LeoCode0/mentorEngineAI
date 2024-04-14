import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { PlaygroundModule } from "./playground/playground.module";
import { PathsModule } from "./paths/paths.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({ driver: ApolloDriver }),
    PlaygroundModule,
    PathsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}

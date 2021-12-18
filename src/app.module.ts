import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import config from './config/keys';

import { MongooseModule } from '@nestjs/mongoose';
import { CompaniesModule } from './modules/companies/companies.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI),
    CompaniesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

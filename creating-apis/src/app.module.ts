import { Quiz2Module } from './Quizz/Module/quiz.module';
import { Quiz2REpository } from './Quizz/Repository/quiz.repository';
import { Quiz2Controller } from './Quizz/Controller/quiz.controller';
import { Quiz2Service } from './Quizz/Service/quiz.service';
import { typeOrmConfig } from 'src/config/typeorm.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminController } from './Administrator/Controller/admin.controller';
import { AdminForm } from './Administrator/Dto/adminform.dto';
import { AdminFormUpdate } from './Administrator/Dto/adminformupdate.dto';
import { AdminEntity } from './Administrator/Entities/ad.entities';
import { AdminModule } from './Administrator/Module/admin.module';
import { AdminService } from './Administrator/Services/admin.service';


@Module({
  imports: [Quiz2Module, TypeOrmModule.forRoot(typeOrmConfig),Quiz2REpository],
  controllers: [Quiz2Controller],
  providers: [Quiz2Service],
})
export class AppModule {}
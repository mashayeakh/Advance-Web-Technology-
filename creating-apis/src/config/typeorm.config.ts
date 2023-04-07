import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const  typeOrmConfig : TypeOrmModuleOptions={

    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'goodboy',
    database: 'QuizDB2',
    autoLoadEntities: true,
    synchronize: true,

}
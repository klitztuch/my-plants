import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantsModule } from './plants/plants.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from './plants/entities/plant.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    PlantsModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'myplants',
      entities: [Plant],
      synchronize: true,
    }),
    PlantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

import { Injectable } from '@nestjs/common';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Plant } from './entities/plant.entity';

@Injectable()
export class PlantsService {
  constructor(
    @InjectRepository(Plant)
    private plantRepository: Repository<Plant>,
  ) {}
  async create(createPlantDto: CreatePlantDto): Promise<Plant> {
    return await this.plantRepository.save(createPlantDto);
  }

  findAll(): Promise<Plant[]> {
    return this.plantRepository.find();
  }

  findOne(id: number): Promise<Plant | null> {
    return this.plantRepository.findOneBy({ id });
  }

  async update(id: number, updatePlantDto: UpdatePlantDto) {
    return await this.plantRepository.update(id, updatePlantDto);
  }

  async remove(id: number): Promise<void> {
    await this.plantRepository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deck } from '../decks.entity';

@Injectable()
export class DecksService {
  constructor(
    @InjectRepository(Deck)
    private decksRepository: Repository<Deck>,
  ) {}

  findAll(): Promise<Deck[]> {
    return this.decksRepository.find();
  }

  findOne(id: number): Promise<Deck | null> {
    return this.decksRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.decksRepository.delete(id);
  }
}

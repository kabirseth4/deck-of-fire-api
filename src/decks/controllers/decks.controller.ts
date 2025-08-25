import { DecksService } from '@/decks/services/decks.service';
import { Controller, Get } from '@nestjs/common';
import { Deck } from '../decks.entity';

@Controller('decks')
export class DecksController {
  constructor(private decksService: DecksService) {}

  @Get()
  async findAll(): Promise<Deck[]> {
    return this.decksService.findAll();
  }
}

import { Deck } from '@/decks/decks.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DecksController } from './controllers/decks.controller';
import { DecksService } from './services/decks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Deck])],
  providers: [DecksService],
  controllers: [DecksController],
})
export class DecksModule {}

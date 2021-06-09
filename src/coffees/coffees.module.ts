import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { COFFEE_BRANDS } from './coffees.constant';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import coffeesConfig from './config/coffees.config';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

export class MockCoffeesService {}
@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    { provide: COFFEE_BRANDS, useValue: ['Buddy Brew', 'Nescafe'] },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}

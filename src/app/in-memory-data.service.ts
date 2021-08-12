import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', age: 12, country: 'America' },
      { id: 12, name: 'Narco', age: 12, country: 'America' },
      { id: 13, name: 'Bombasto', age: 12, country: 'America' },
      { id: 14, name: 'Celeritas', age: 12, country: 'America' },
      { id: 15, name: 'Magneta', age: 12, country: 'America' },
      { id: 16, name: 'RubberMan', age: 12, country: 'America' },
      { id: 17, name: 'Dynama', age: 12, country: 'America' },
      { id: 18, name: 'Dr IQ', age: 12, country: 'America' },
      { id: 19, name: 'Magma', age: 12, country: 'America' },
      { id: 20, name: 'Tornado', age: 12, country: 'America' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 11, name: 'Dr Nice', country: "Mexico", age: 24 },
        { id: 12, name: 'Narco', country: "Mexico", age: 24  },
        { id: 13, name: 'Bombasto', country: "Mexico", age: 24  },
        { id: 14, name: 'Celeritas', country: "Mexico", age: 24  }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
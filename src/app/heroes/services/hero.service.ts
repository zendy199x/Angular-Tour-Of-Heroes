import { Injectable } from "@angular/core";
import { Hero } from "../../interfaces/hero.interface";
import { HEROES } from "../../mocks/heroes.mock";
import { Observable, of } from "rxjs";
import { MessageService } from "../../messages/services/message.service";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add(`HeroService: fetched heroes`);
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}

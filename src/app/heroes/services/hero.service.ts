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
}

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Hero } from "../interfaces/hero.interface";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { HeroService } from "./services/hero.service";
import { MessageService } from "../messages/services/message.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-heroes",
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HeroDetailComponent],
  templateUrl: "./heroes.component.html",
  styleUrl: "./heroes.component.css",
})
export class HeroesComponent {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  hero: Hero = {
    id: 1,
    name: "Windstorm",
  };

  heroes: Hero[] = [];

  selectedHero?: Hero;
  selectedHeroTest!: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Heroes Component: Selected hero ID: ${hero.id}`);
  }

  selectHeroTest(hero: Hero) {
    this.selectedHeroTest = hero;
    console.log(`hero test`, hero);
  }
}

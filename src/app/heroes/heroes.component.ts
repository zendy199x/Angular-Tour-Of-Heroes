import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Hero } from "../interfaces/hero.interface";
import { HEROES } from "../mocks/heroes.mock";

@Component({
  selector: "app-heroes",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./heroes.component.html",
  styleUrl: "./heroes.component.css",
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: "Windstorm",
  };

  heroes = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

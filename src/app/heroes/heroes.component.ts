import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Hero } from "../interfaces/hero.interface";

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
}

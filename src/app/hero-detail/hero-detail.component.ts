import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Hero } from "../interfaces/hero.interface";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-hero-detail",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./hero-detail.component.html",
  styleUrl: "./hero-detail.component.css",
})
export class HeroDetailComponent {
  @Input() hero?: Hero;

  @Output() selectedHeroTest = new EventEmitter<Hero>();

  selectedTest(hero: Hero) {
    this.selectedHeroTest.emit(hero);
  }
}

import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Hero } from "../interfaces/hero.interface";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { HeroService } from "./../heroes/services/hero.service";

@Component({
  selector: "app-hero-detail",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./hero-detail.component.html",
  styleUrl: "./hero-detail.component.css",
})
export class HeroDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  @Input() hero?: Hero;

  @Output() selectedHeroTest = new EventEmitter<Hero>();

  selectedTest(hero: Hero) {
    this.selectedHeroTest.emit(hero);
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }
}

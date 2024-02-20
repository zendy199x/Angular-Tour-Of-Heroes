import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { MessagesComponent } from "./messages/messages.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NotFoundComponent,
    DashboardComponent,
    HeroesComponent,
    MessagesComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Tour of Heroes";
}

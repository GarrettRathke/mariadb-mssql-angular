import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HogwartsService } from './services/hogwarts.service';
import { House } from './models/house.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Hogwarts';
  houses: House[] = [];

  constructor(private hogwartsService: HogwartsService) {}

  ngOnInit(): void {
    this.getHouses();
  }

  getHouses(): void {
    this.hogwartsService.getHouses().subscribe(houses => this.houses = houses);
  }
}

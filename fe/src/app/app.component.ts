import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HogwartsService } from './services/hogwarts.service';
import House from './models/house';
import Student from './models/student';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Hogwarts';
  houses: House[] = [];
  students: Student[] = [];

  constructor(private hogwartsService: HogwartsService) {}

  ngOnInit(): void {
    this.getHouses();
    this.getStudents();
  }

  getHouses(): void {
    this.hogwartsService.getHouses().subscribe(houses => this.houses = houses);
  }

  getStudents(): void {
    this.hogwartsService.getStudents().subscribe(students => this.students = students);
  }
}

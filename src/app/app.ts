import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Navbar, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular');
  isActive = false

  data = [
    {id: 1, driver: "Max Verstappen", grid: 1 },
    {id: 4, driver: "Lando Norris", grid: 2 },
    {id: 16, driver: "Charles Leclerc", grid: 3 }
  ]

  changeMode() {
    this.isActive = !this.isActive
  }
}

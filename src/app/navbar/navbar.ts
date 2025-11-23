import { Component, input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  id = input.required<number>();
  driver = input<string>();
  grid = input<number>();
}

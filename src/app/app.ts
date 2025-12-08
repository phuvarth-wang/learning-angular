import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./nav-bar/nav-bar";
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}

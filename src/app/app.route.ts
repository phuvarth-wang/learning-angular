import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { NavBar } from "./nav-bar/nav-bar";

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'nav',
    component: NavBar,
  }
];
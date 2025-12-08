import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {

  count = signal(0);
  double = computed(() => this.count() * 2);

  increase() {
    this.count.update(num => num + 1);
  }
  
  decrease() {
    this.count.update(num => num - 1);
  }

  onDouble() {
    this.count.update(doubleCount => doubleCount * 2);
  }

  constructor() {
    effect(() => {
      console.log('Count changed:', this.count());
      console.log('Double changed:', this.double());
    })
  }
}
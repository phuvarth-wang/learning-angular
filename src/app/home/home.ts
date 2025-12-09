import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {

  count = signal(0);
  newItemName = signal('');
  items = signal<{ id: number; name: string; }[]>([]);

  private nextId = 1;

  double = computed(() => this.count() * 2);
  
  constructor() {
    effect(() => {
      console.log('Items length:', this.items().length);
    })
  }

  increase() {
    this.count.update(num => num + 1);
  }
  
  decrease() {
    this.count.update(num => num - 1);
  }

  onDouble() {
    this.count.update(doubleCount => doubleCount * 2);
  }

  setNewItemName(value: string) {
    this.newItemName.set(value)
  }

  onEmpty() {
    alert(
      `Please enter item name`
    )
  }

  addItem() {
    const name = this.newItemName().trim();
    if (this.items().length >= 3) {
      return alert(`Lots of items`);
    }

    if (!name) return this.onEmpty();

    if (this.items().some(i => i.name === name)) {
      return alert(`We already have this item`);
    }

    const id = this.nextId++;
    this.items.update(prev => [...prev, { id, name }]);
    this.newItemName.set('');
  }

  removeItem(id: number) {
    this.items.update(prev => prev.filter(item => item.id !== id));
  }

  removeAllItem() {
    this.items.set([]);
  }
}
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  todos = [
    {
      id: 1,
      name: "Buy Milk Tea",
      place: "Family Mart",
      description: "Buy 2 Milk Tea for me",
      completed: true
    },

    {
      id: 2,
      name: "Watch Spiderman",
      place: "Gsc MidValley",
      description: "Alone. Erin bojio",
      completed: false
    },

    {
      id: 3,
      name: "Book Hotel",
      place: "Traveloka",
      description: "Book hotel for Penang",
      completed: false
    }
  ];

  constructor() {}
  addItem(todo) {
    this.todos.push(todo);
  }

  removeItem(i) {
    this.todos.splice(i, 1);
  }

  getAllItems() {
    return this.todos;
  }

  getItemById(id) {
    for (let i = 0; i < this.todos.length; i++) {
      console.log(this.todos);
      if (this.todos[i].id == id) {
        return this.todos[i];
      }
    }
  }

  markItemDone(todo) {
    todo.completed = true;
  }
}

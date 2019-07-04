import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AddPage } from "../add/add.page";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
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

  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddPage
    });

    modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
    this.todos.push(data.newtodo);
  }
}

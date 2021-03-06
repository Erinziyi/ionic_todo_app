import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AddPage } from "../add/add.page";
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  todos = [];

  constructor(
    public modalController: ModalController,
    public dataService: DataService
  ) {}

  ngOnInit() {
    this.todos = this.dataService.getAllItems();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddPage
    });

    modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
    // How to generate a unique
    this.dataService.addItem(data);
    this.todos.push(data.newtodo);
  }

  markDone(todo) {
    todo.completed = true;
  }

  delete(i) {
    this.todos.splice(i, 1);
  }
}

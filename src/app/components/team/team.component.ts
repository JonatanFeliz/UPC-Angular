import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  // page information

  img_url="./../../../assets/img/";

  names_upc = ["Laura Fernandez", "Marina Iniesta", "Carla Abascal", "Alejandro"];

  img_upc = [this.img_url + "laura.png", this.img_url + "marina.jpg", this.img_url + "carla.jpg", this.img_url + "avatarvacio.png"];

  img_proven = [this.img_url + "avatarvacio.png"];

  names_proven = ["Jonatan Feliz", "Pau Martinez","Sonia Morales", "Anthony Reyes", "Ruyou Hu Ye"];

  
  
}

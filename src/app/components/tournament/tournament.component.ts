/**
 * Show list of tournaments, show button for create and edit
 */

import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit{

  oculta_update:boolean = false;
  oculta_list:boolean   = true;
  oculta_actions:boolean = true;

  Tournaments:any=[];
  itemsNumber = 1;

  itemFormulario!:any;

  constructor(private crudService: CrudService, private router: Router, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.listTournaments();
  }

  //delete tournament from database
  delete(id:any, i:any) {
    
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteTournament(id).subscribe((res) => {
        this.listTournaments();
      })
    }
  }

  // get tournaments for list
  listTournaments(){
    this.crudService.GetTournaments().subscribe(res => {
      this.Tournaments = Object.values(res);
    });
  }

  // show and hide sections for edit or show data
  edit(item:any){
    this.oculta_update = true;
    this.oculta_list   = false;

    this.itemFormulario=item;

    let date = new Date(this.itemFormulario.date);

    this.itemFormulario.date = this.Dateformat(date);


  }

  // send data for update tournament
  submit() {

    this.onUpdate(this.itemFormulario.id,this.itemFormulario.name, this.itemFormulario.date);

    this.oculta_update = false;
    this.oculta_list   = true;

  }

  // send data for update tournament
  onUpdate(id:number,name:string,date:string): any {
    this.crudService.updateTournament(id, name, date)
    .subscribe(() => {
        
      }, (err) => {
        
    });
  }


  // format the date to show it to the user
  Dateformat(date:Date):string{
    var month = date.getMonth()+1;
    var day = date.getDate();
    var year = date.getFullYear();


    var month_str = month.toString();

    var day_str = day.toString();

    if(month<10){
      month_str = "0" + month;
    }
    if(day < 10){
      day_str = "0" + day;
    }

    return year + "-" + month_str + "-" + day_str;
  }

}

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

  delete(id:any, i:any) {
    console.log(id);
    console.log(i);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteTournament(id).subscribe((res) => {
        // this.Tournaments.splice(i, 1);
        this.listTournaments();
        //window.location.reload();
      })
    }
    // this.router.navigate(['tournament']);
    //window.location.reload()
    
  }


  listTournaments(){
    this.crudService.GetTournaments().subscribe(res => {
      //console.log(res)
      this.Tournaments = Object.values(res);
      console.log(this.Tournaments)
    });
  }

  edit(item:any){
    this.oculta_update = true;
    this.oculta_list   = false;

    this.itemFormulario=item;
    console.log(this.itemFormulario);

    let date = new Date(this.itemFormulario.date);

    this.itemFormulario.date = this.Dateformat(date);
    console.log(this.itemFormulario.date);


  }

  submit() {
    console.log("Parametros a actualizar");
    console.log(this.itemFormulario.id);
    console.log(this.itemFormulario.name);

    console.log(typeof(this.itemFormulario.date));

    this.onUpdate(this.itemFormulario.id,this.itemFormulario.name, this.itemFormulario.date);

    this.oculta_update = false;
    this.oculta_list   = true;

    
  }

  onUpdate(id:number,name:string,date:string): any {
    this.crudService.updateTournament(id, name, date)
    .subscribe(() => {
        console.log('Tournament updated successfully!')
        // this.ngZone.run(() => this.router.navigate(['tournament']))
      }, (err) => {
        console.log(err);
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

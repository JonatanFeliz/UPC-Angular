/**
 * Form for create new tournament
 */

import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-tournament-add',
  templateUrl: './tournament-add.component.html',
  styleUrls: ['./tournament-add.component.css']
})
export class TournamentAddComponent implements OnInit{

  
  
  constructor(public formBuilder: FormBuilder,private router: Router,private ngZone: NgZone,private crudService: CrudService) {}

  // validate tournament create form
  tournamentForm=new FormGroup({
    name:new FormControl('',[
      Validators.required,
      Validators.maxLength(20)
    ]),
    date:new FormControl('',[
      Validators.required
    ])
  })


  ngOnInit() { }

  //send data for create new tournament
  onSubmit(): any {

    var name  = this.tournamentForm.get('name')?.value;
    var date  = this.tournamentForm.get('date')?.value;

    var data = {
      "name": name,
      "date": date
    }

    this.crudService.AddTournament(data)
    .subscribe(() => {
        
        this.ngZone.run(() => this.router.navigate(['tournament']))
      }, (err) => {
        
    });
  }
}

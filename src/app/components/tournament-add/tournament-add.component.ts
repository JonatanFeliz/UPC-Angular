import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-tournament-add',
  templateUrl: './tournament-add.component.html',
  styleUrls: ['./tournament-add.component.css']
})
export class TournamentAddComponent implements OnInit{

  tournamentForm: FormGroup;
  
  constructor(public formBuilder: FormBuilder,private router: Router,private ngZone: NgZone,private crudService: CrudService) { 
    this.tournamentForm = this.formBuilder.group({
      name: [''],
      date: [''],
    })
  }
  ngOnInit() { }
  onSubmit(): any {
    this.crudService.AddTournament(this.tournamentForm.value)
    .subscribe(() => {
        console.log('User added successfully!')
        this.ngZone.run(() => this.router.navigate(['tournament']))
      }, (err) => {
        console.log(err);
    });
  }
}

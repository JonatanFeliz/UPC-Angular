import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-tournament-update',
  templateUrl: './tournament-update.component.html',
  styleUrls: ['./tournament-update.component.css']
})
export class TournamentUpdateComponent {

  getId: any;
  updateForm: FormGroup;
  
  constructor(public formBuilder: FormBuilder, private router: Router, private ngZone: NgZone, private activatedRoute: ActivatedRoute, private crudService: CrudService) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetTournament(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        date: res['date'],
      });
    });
    this.updateForm = this.formBuilder.group({
      name: [''],
      date: [''],
    })
  }
  ngOnInit() { }
  
  onUpdate(): any {
    this.crudService.updateTournament(this.getId, "", this.updateForm.value)
    .subscribe(() => {
        console.log('Tournament updated successfully!')
        this.ngZone.run(() => this.router.navigate(['tournament']))
      }, (err) => {
        console.log(err);
    });
  }
  
}

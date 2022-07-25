import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from '../action';
import { ActionEditService } from './action-edit.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-action-edit',
  templateUrl: './action-edit.component.html',
  styleUrls: ['./action-edit.component.scss']
})
export class ActionEditComponent implements OnInit {
  id: number;
  action:Action
  public currentRow: any;


  constructor(
    private router: Router, private _actionEditService: ActionEditService,
    private activateRoute: ActivatedRoute,private _toastrService: ToastrService, 
  ) { }

  ngOnInit(): void {
    this.id= Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.getbyid(this.id)
    
  }

  getbyid(id:number){
    return this._actionEditService.getByid(id).subscribe((res)=>{
   this.action=res
   console.log(this.action);
    })
  }
 

  submit(form) {
    if (form.valid) {
  
      this._actionEditService.update(this.currentRow)
      .subscribe(
        response => {
          this._actionEditService.update(this.action[0]).subscribe((res)=>{
            console.log(this.action);
            
          this._toastrService.success('Mise � jour privileg avec success', '');
          this.router.navigate(['apps/gmao/action/action-list/']);
        }
        ,
        error => {
          this._toastrService.error('Impossible de mettre � jour pribil�ge', error);
          console.log(error);
        }) ;
    })
    

  }}
  
}

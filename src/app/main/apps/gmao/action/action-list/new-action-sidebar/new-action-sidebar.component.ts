import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { ToastrService } from 'ngx-toastr';
import { ActionEditService } from '../../action-edit/action-edit.service';
import { ActionListService } from '../action-list.service';

@Component({
  selector: 'app-new-action-sidebar',
  templateUrl: './new-action-sidebar.component.html',
 
})
export class NewActionSidebarComponent implements OnInit {

  public name;
  public Designation;
  public observation;
  public code;
  public roles = [];
  public select_roles = [];

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private router: Router, private _actionEditService: ActionEditService, private _coreSidebarService: CoreSidebarService,
    private _roleListService: RoleListService ,private _toastrService: ToastrService,
    private _actionListService: ActionListService) {}

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
    if (form.valid) {
    
      this.toggleSidebar('new-action-sidebar');
      this._actionEditService.create(form.value)
      
    .subscribe(
      response => {
        this._toastrService.success("L'ajout d'un nouveau privil�ge avec success", "");
        this.router.navigate(['apps/gmao/action/action-list/action-view/'+response.id]);
      },  
      error => {
        this._toastrService.error("Impossible d'ajouter un noueau pribil�ge", "");
        console.log(error);
      });
    }
  }
 

  ngOnInit(): void {}

}

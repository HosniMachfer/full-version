import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Router } from '@angular/router';
import { UniteListService } from 'app/main/apps/gestion-dechets/unite/unite-list/unite-list.service';
import { UniteEditService } from 'app/main/apps/gestion-dechets/unite/unite-edit/unite-edit.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-unite-sidebar',
  templateUrl: './new-unite-sidebar.component.html'
})
export class NewUniteSidebarComponent implements OnInit {
  public name;
  public code;
  public roles = [];
  public select_roles = [];

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private router: Router, private _uniteEditService: UniteEditService, private _coreSidebarService: CoreSidebarService,
    private _roleListService: RoleListService ,private _toastrService: ToastrService,
    private _uniteListService: UniteListService) {}

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
      this.toggleSidebar('new-unite-sidebar');
      this._uniteEditService.create(form.value)
    .subscribe(
      response => {
        this._toastrService.success("L'ajout d'un nouveau privilége avec success", "");
        this.router.navigate(['apps/gestion-dechets/unite/unite-list/unite-view/'+response.id]);
      },
      error => {
        this._toastrService.error("Impossible d'ajouter un noueau pribilége", "");
        console.log(error);
      });
    }
  }

  ngOnInit(): void {}
}

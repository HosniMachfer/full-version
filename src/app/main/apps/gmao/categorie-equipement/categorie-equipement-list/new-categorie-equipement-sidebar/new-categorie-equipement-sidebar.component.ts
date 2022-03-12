import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Router } from '@angular/router';
import { CategorieEquipementListService } from 'app/main/apps/gmao/categorie-equipement/categorie-equipement-list/categorie-equipement-list.service';
import { CategorieEquipementEditService } from 'app/main/apps/gmao/categorie-equipement/categorie-equipement-edit/categorie-equipement-edit.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-categorie-equipement-sidebar',
  templateUrl: './new-categorie-equipement-sidebar.component.html'
})
export class NewCategorieEquipementSidebarComponent implements OnInit {
  public name;
  public code;
  public roles = [];
  public select_roles = [];

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private router: Router, private _categorieEquipementEditService: CategorieEquipementEditService, private _coreSidebarService: CoreSidebarService,
    private _roleListService: RoleListService ,private _toastrService: ToastrService,
    private _categorieEquipementListService: CategorieEquipementListService) {}

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
      this.toggleSidebar('new-categorie-equipement-sidebar');
      this._categorieEquipementEditService.create(form.value)
    .subscribe(
      response => {
        this._toastrService.success("L'ajout d'un nouveau catégorie équipement avec success", "");
        this.router.navigate(['apps/gmao/categorie-equipement/categorie-equipement-list/categorie-equipement-view/'+response.id]);
      },
      error => {
        this._toastrService.error("Impossible d'ajouter un noueau pribil�ge", "");
        console.log(error);
      });
    }
  }

  ngOnInit(): void {}
}

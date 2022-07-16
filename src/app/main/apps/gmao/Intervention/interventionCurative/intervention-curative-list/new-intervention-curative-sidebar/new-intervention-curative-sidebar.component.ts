import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MachineListService } from 'app/main/apps/gmao/machine/machine-list/machine-list.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { ToastrService } from 'ngx-toastr';
import { InterventionCurativeService } from '../../intervention-curative.service';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Ajouter type de pannne</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">

    <label class="form-label" for="basic-icon-default-uname">Désignation</label>
            <input
            ngModel
              type="text"
              id="basic-icon-default-uname"
              class="form-control dt-uname"
              aria-label="jdoe1"
              aria-describedby="basic-icon-default-uname2"
              name="typePanne"/>

      <!-- //<p>Hello, {{name}}!</p> -->
    </div>
    <div class="modal-footer">
    <button type="submit" class="btn btn-primary mr-1"  rippleEffect>Valider</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
      
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-new-intervention-curative-sidebar',
  templateUrl: './new-intervention-curative-sidebar.component.html',
  styleUrls: ['./new-intervention-curative-sidebar.component.scss']
})
export class NewInterventionCurativeSidebarComponent implements OnInit {
  time = {hour: 13, minute: 30};
  spinners = true;
  public name;
  public code;
  public roles = [];
  public select_roles = [];
  public selectEquipement: any = [];

  public selectedEquipement = [];


  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private router: Router,  private _coreSidebarService: CoreSidebarService,
    private _roleListService: RoleListService ,private _toastrService: ToastrService, 
    private modalService: NgbModal,private _interventionService : InterventionCurativeService, private equipementListService :MachineListService) {}

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
      this.toggleSidebar('new-intervention-curative-sidebar');
      this._interventionService.Add(form.value)
    .subscribe(
      response => {
        this._toastrService.success("L'ajout d'un nouveau catégorie équipement avec success", "");
       // this.router.navigate(['apps/gmao/categorie-equipement/categorie-equipement-list/categorie-equipement-view/'+response.id]);
      },
      error => {
        this._toastrService.error("Impossible d'ajouter un noueau pribil�ge", "");
        console.log(error);
      });
    }
  }

  ngOnInit(): void {

    this.equipementListService.getAll()
      .subscribe(
        data => {
          this.selectEquipement = data;

        },
        error => {
          console.log(error);
    });



  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}



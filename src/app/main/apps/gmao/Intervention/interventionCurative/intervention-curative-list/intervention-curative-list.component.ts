import { Component, OnInit, ViewChild } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { CategorieEquipementListService } from '../../../categorie-equipement/categorie-equipement-list/categorie-equipement-list.service';
import { MachineListService } from '../../../machine/machine-list/machine-list.service';
import { InterventionCurativeService } from '../intervention-curative.service';

@Component({
  selector: 'app-intervention-curative-list',
  templateUrl: './intervention-curative-list.component.html',
  styleUrls: ['./intervention-curative-list.component.scss']
})
export class InterventionCurativeListComponent implements OnInit {
  
  private tempData = [];
  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;
  languageOptions: any;
  public selectedRole = [];
  public selectedPlan = [];
  public selectedStatus = [];
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public searchValue = '';
  
  public selectEquipement: any = [];
  // public selectedEquipement = [];

 constructor(private interventionCurative: InterventionCurativeService,
  private _coreSidebarService: CoreSidebarService ,private equipementListService : MachineListService) { 
 
    

 }
 ngOnInit(): void {
 this.interventionCurative.getAll()
	      .subscribe(
	        data => {
            this.rows = data;
            this.tempData = this.rows;
            console.log('tttt',this.rows);
	        },
	        error => {
	          console.log(error);
          });

this.equipementListService.getAll()
      .subscribe(
        data => {
          this.selectEquipement = data;
        },
        error => {
          console.log(error);
    });
}

delete(idInterventionC: number) : void{
  debugger
  this.interventionCurative.delete(idInterventionC)
  .subscribe()

}
	        
toggleSidebar(name): void {
  console.log(name);
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
}

 filterUpdate(event) {
  const val = event.target.value.toLowerCase();
  console.log(val);

   // Filter Our Data
    const temp = this.tempData.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // Update The Rows
    this.rows = temp;
    // Whenever The Filter Changes, Always Go Back To The First Page
    this.table.offset = 0;

 }
}



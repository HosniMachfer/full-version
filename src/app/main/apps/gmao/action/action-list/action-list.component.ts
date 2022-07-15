import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ActionListComponent implements OnInit {  private tempData = [];
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
  

 constructor(private _coreSidebarService: CoreSidebarService) { 

 }
 ngOnInit(): void {
//  this.marqueListService.getAll()
// 	      .subscribe(
// 	        data => {
//             this.rows = data;
//             this.tempData = this.rows;
//             console.log(this.rows);
// 	        },
// 	        error => {
// 	          console.log(error);
//           });
}
	        
	        
toggleSidebar(name): void {
  // console.log(name);
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



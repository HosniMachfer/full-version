import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { PrivilegeListService } from 'app/main/apps/privilege/privilege-list/privilege-list.service';

@Component({
  selector: 'app-privilege-list',
  templateUrl: './privilege-list.component.html',
  styleUrls: ['./privilege-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrivilegeListComponent implements OnInit {
  public selectedRole = [];
  public selectedPlan = [];
  public selectedStatus = [];
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public searchValue = '';
  
   public selectStatus: any = [
    { name: 'All', value: '' },
    { name: 'Pending', value: 'Pending' },
    { name: 'Active', value: 'Active' },
    { name: 'Inactive', value: 'Inactive' }
  ];
    public selectRole: any = [
    { name: 'All', value: '' },
    { name: 'Admin', value: 'Admin' },
    { name: 'Author', value: 'Author' },
    { name: 'Editor', value: 'Editor' },
    { name: 'Maintainer', value: 'Maintainer' },
    { name: 'Subscriber', value: 'Subscriber' }
  ];

  public selectPlan: any = [
    { name: 'All', value: '' },
    { name: 'Basic', value: 'Basic' },
    { name: 'Company', value: 'Company' },
    { name: 'Enterprise', value: 'Enterprise' },
    { name: 'Team', value: 'Team' }
  ];
 constructor(private privilegeListService: PrivilegeListService) { }
 ngOnInit(): void {
 this.privilegeListService.getAll()
	      .subscribe(
	        data => {
	          this.rows = data;
	        },
	        error => {
	        console.log(" ici de la merde");
	          console.log(error);
	        });}
 filterUpdate(event) {}
 filterByStatus(event) {}
 filterByRole(event) {}
 filterByPlan(event) {}


}

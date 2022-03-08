import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { ModuleApplicatifListService } from 'app/main/apps/module-applicatif/module-applicatif-list/module-applicatif-list.service';

import { AuthenticationService } from 'app/auth/service';
import { timeStamp } from 'console';


@Component({
  selector: '[core-menu]',
  templateUrl: './core-menu.component.html',
  styleUrls: ['./core-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreMenuComponent implements OnInit {
  currentUser: any;
  data;
  rowsRolesItem;
 

  @Input()
  layout = 'vertical';

  @Input()
  menu: any;
  
  // Private
  private _unsubscribeAll: Subject<any>;


  /**
   *
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {CoreMenuService} _coreMenuService
   */
  constructor(private _changeDetectorRef: ChangeDetectorRef, private _coreMenuService: CoreMenuService,
              private _moduleApplicatifListService: ModuleApplicatifListService, private _authenticationService: AuthenticationService) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Set the menu either from the input or from the service
    this.menu = this.menu || this._coreMenuService.getCurrentMenu();
    // Subscribe to the current menu changes
    this._coreMenuService.onMenuChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
      this.currentUser = this._coreMenuService.currentUser;
      // Load menu
      this.menu = this._coreMenuService.getCurrentMenu();
      
      
	    console.log("......................................||||||||||||||||||||||||||||||");
	    this.menu.rolesUser = this.currentUser.roles;
      console.log(this.menu.rolesUser );
      console.log("......................................||||||||||||||||||||||||||||||");
      this.hasRole(this.menu);
	    this._changeDetectorRef.markForCheck();
    });

  }


  hasRole(menu){

    this._moduleApplicatifListService.hasRole(menu)
	      .subscribe(
	        data => {
            console.log("/////////////////////////////////////////////");
            console.log(data);
            console.log("/////////////////////////////////////////////");
            this.menu = data;
	        },
	        error => {
	        console.log(" ici de la merde");
	          console.log(error);
	        });

  }
  
}

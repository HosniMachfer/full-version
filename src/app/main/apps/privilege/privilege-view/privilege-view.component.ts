import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PrivilegeViewService } from 'app/main/apps/privilege/privilege-view/privilege-view.service';

@Component({
  selector: 'app-privilege-view',
  templateUrl: './privilege-view.component.html',
  styleUrls: ['./privilege-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrivilegeViewComponent implements OnInit, OnDestroy {
  // public
  public url = this.router.url;
  public lastValue;
  public data;

  // private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {Router} router
   * @param {PrivilegeViewService} _privilegeViewService
   */
  constructor(private router: Router, private _privilegeViewService: PrivilegeViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    console.log("************************** je suis dans ngOnInit privilege view --------------");
    this._privilegeViewService.onPrivilegeViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
    });

    console.log(this.data);
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}

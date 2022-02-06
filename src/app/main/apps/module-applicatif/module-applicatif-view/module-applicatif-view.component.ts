import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ModuleApplicatifViewService } from 'app/main/apps/module-applicatif/module-applicatif-view/module-applicatif-view.service';

@Component({
  selector: 'app-module-applicatif-view',
  templateUrl: './module-applicatif-view.component.html',
  styleUrls: ['./module-applicatif-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModuleApplicatifViewComponent implements OnInit, OnDestroy {
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
   * @param {ModuleApplicatifViewService} _moduleApplicatifViewService
   */
  constructor(private router: Router, private _moduleApplicatifViewService: ModuleApplicatifViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
console.log("99999999999999999999999999999999999");
    this._moduleApplicatifViewService.onModuleApplicatifViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

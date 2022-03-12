import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PDRViewService } from 'app/main/apps/gmao/pdr/pdr-view/pdr-view.service';

@Component({
  selector: 'app-pdr-view',
  templateUrl: './pdr-view.component.html',
  styleUrls: ['./pdr-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PDRViewComponent implements OnInit, OnDestroy {
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
   * @param {PDRViewService} _pdrViewService
   */
  constructor(private router: Router, private _pdrViewService: PDRViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    console.log("************************** je suis dans ngOnInit pdr view --------------");
    this._pdrViewService.onPDRViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

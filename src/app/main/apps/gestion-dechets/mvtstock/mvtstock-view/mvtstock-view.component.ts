import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MvtstockViewService } from 'app/main/apps/gestion-dechets/mvtstock/mvtstock-view/mvtstock-view.service';

@Component({
  selector: 'app-mvtstock-view',
  templateUrl: './mvtstock-view.component.html',
  styleUrls: ['./mvtstock-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MvtstockViewComponent implements OnInit, OnDestroy {
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
   * @param {MvtstockViewService} _mvtstockViewService
   */
  constructor(private router: Router, private _mvtstockViewService: MvtstockViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this._mvtstockViewService.onMvtstockViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

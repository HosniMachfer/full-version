import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TypeTierViewService } from 'app/main/apps/gestion-dechets/type-tier/type-tier-view/type-tier-view.service';

@Component({
  selector: 'app-type-tier-view',
  templateUrl: './type-tier-view.component.html',
  styleUrls: ['./type-tier-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TypeTierViewComponent implements OnInit, OnDestroy {
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
   * @param {TypeTierViewService} _typeTierViewService
   */
  constructor(private router: Router, private _typeTierViewService: TypeTierViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this._typeTierViewService.onTypeTierViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

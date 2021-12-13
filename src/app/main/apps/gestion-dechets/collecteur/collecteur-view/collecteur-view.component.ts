import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CollecteurViewService } from 'app/main/apps/gestion-dechets/collecteur/collecteur-view/collecteur-view.service';

@Component({
  selector: 'app-collecteur-view',
  templateUrl: './collecteur-view.component.html',
  styleUrls: ['./collecteur-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CollecteurViewComponent implements OnInit, OnDestroy {
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
   * @param {CollecteurViewService} _collecteurViewService
   */
  constructor(private router: Router, private _collecteurViewService: CollecteurViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this._collecteurViewService.onCollecteurViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

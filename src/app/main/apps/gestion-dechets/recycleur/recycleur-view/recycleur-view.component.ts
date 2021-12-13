import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { RecycleurViewService } from 'app/main/apps/gestion-dechets/recycleur/recycleur-view/recycleur-view.service';

@Component({
  selector: 'app-recycleur-view',
  templateUrl: './recycleur-view.component.html',
  styleUrls: ['./recycleur-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecycleurViewComponent implements OnInit, OnDestroy {
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
   * @param {RecycleurViewService} _recycleurViewService
   */
  constructor(private router: Router, private _recycleurViewService: RecycleurViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this._recycleurViewService.onRecycleurViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

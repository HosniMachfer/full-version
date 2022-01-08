import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ConteneurViewService } from 'app/main/apps/gestion-dechets/conteneur/conteneur-view/conteneur-view.service';

@Component({
  selector: 'app-conteneur-view',
  templateUrl: './conteneur-view.component.html',
  styleUrls: ['./conteneur-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConteneurViewComponent implements OnInit, OnDestroy {
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
   * @param {ConteneurViewService} _conteneurViewService
   */
  constructor(private router: Router, private _conteneurViewService: ConteneurViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this._conteneurViewService.onConteneurViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

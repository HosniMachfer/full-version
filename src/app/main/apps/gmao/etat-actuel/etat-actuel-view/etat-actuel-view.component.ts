import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { EtatActuelViewService } from 'app/main/apps/gmao/etat-actuel/etat-actuel-view/etat-actuel-view.service';

@Component({
  selector: 'app-etat-actuel-view',
  templateUrl: './etat-actuel-view.component.html',
  styleUrls: ['./etat-actuel-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EtatActuelViewComponent implements OnInit, OnDestroy {
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
   * @param {EtatActuelViewService} _etatActuelViewService
   */
  constructor(private router: Router, private _etatActuelViewService: EtatActuelViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this._etatActuelViewService.onEtatActuelViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

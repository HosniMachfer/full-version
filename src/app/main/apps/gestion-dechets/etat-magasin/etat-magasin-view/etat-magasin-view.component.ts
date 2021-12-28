import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { EtatMagasinViewService } from 'app/main/apps/gestion-dechets/etat-magasin/etat-magasin-view/etat-magasin-view.service';

@Component({
  selector: 'app-etat-magasin-view',
  templateUrl: './etat-magasin-view.component.html',
  styleUrls: ['./etat-magasin-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EtatMagasinViewComponent implements OnInit, OnDestroy {
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
   * @param {EtatMagasinViewService} _etatMagasinViewService
   */
  constructor(private router: Router, private _etatMagasinViewService: EtatMagasinViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this._etatMagasinViewService.onEtatMagasinViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

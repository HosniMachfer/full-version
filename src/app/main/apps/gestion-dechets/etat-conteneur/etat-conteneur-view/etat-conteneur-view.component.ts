import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { EtatConteneurViewService } from 'app/main/apps/gestion-dechets/etat-conteneur/etat-conteneur-view/etat-conteneur-view.service';

@Component({
  selector: 'app-etat-conteneur-view',
  templateUrl: './etat-conteneur-view.component.html',
  styleUrls: ['./etat-conteneur-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EtatConteneurViewComponent implements OnInit, OnDestroy {
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
   * @param {EtatConteneurViewService} _etatConteneurViewService
   */
  constructor(private router: Router, private _etatConteneurViewService: EtatConteneurViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this._etatConteneurViewService.onEtatConteneurViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

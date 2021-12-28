import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { EtatMouvementViewService } from 'app/main/apps/gestion-dechets/etat-mouvement/etat-mouvement-view/etat-mouvement-view.service';

@Component({
  selector: 'app-etat-mouvement-view',
  templateUrl: './etat-mouvement-view.component.html',
  styleUrls: ['./etat-mouvement-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EtatMouvementViewComponent implements OnInit, OnDestroy {
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
   * @param {EtatMouvementViewService} _etatMouvementViewService
   */
  constructor(private router: Router, private _etatMouvementViewService: EtatMouvementViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this._etatMouvementViewService.onEtatMouvementViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

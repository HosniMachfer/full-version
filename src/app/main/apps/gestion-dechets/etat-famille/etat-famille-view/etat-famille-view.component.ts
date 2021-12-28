import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { EtatFamilleViewService } from 'app/main/apps/gestion-dechets/etat-famille/etat-famille-view/etat-famille-view.service';

@Component({
  selector: 'app-etat-famille-view',
  templateUrl: './etat-famille-view.component.html',
  styleUrls: ['./etat-famille-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EtatFamilleViewComponent implements OnInit, OnDestroy {
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
   * @param {EtatFamilleViewService} _etatFamilleViewService
   */
  constructor(private router: Router, private _etatFamilleViewService: EtatFamilleViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this._etatFamilleViewService.onEtatFamilleViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

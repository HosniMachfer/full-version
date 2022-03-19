import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { EtatMachineViewService } from 'app/main/apps/gmao/etat-machine/etat-machine-view/etat-machine-view.service';

@Component({
  selector: 'app-etat-machine-view',
  templateUrl: './etat-machine-view.component.html',
  styleUrls: ['./etat-machine-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EtatMachineViewComponent implements OnInit, OnDestroy {
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
   * @param {EtatMachineViewService} _etatMachineViewService
   */
  constructor(private router: Router, private _etatMachineViewService: EtatMachineViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this._etatMachineViewService.onEtatMachineViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

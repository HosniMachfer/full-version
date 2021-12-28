import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FournisseurViewService } from 'app/main/apps/gestion-dechets/fournisseur/fournisseur-view/fournisseur-view.service';

@Component({
  selector: 'app-fournisseur-view',
  templateUrl: './fournisseur-view.component.html',
  styleUrls: ['./fournisseur-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FournisseurViewComponent implements OnInit, OnDestroy {
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
   * @param {FournisseurViewService} _fournisseurViewService
   */
  constructor(private router: Router, private _fournisseurViewService: FournisseurViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this._fournisseurViewService.onFournisseurViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

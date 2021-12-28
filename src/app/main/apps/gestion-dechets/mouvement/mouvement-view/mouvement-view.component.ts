import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MouvementViewService } from 'app/main/apps/gestion-dechets/mouvement/mouvement-view/mouvement-view.service';

@Component({
  selector: 'app-mouvement-view',
  templateUrl: './mouvement-view.component.html',
  styleUrls: ['./mouvement-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MouvementViewComponent implements OnInit, OnDestroy {
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
   * @param {MouvementViewService} _mouvementViewService
   */
  constructor(private router: Router, private _mouvementViewService: MouvementViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this._mouvementViewService.onMouvementViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TypeMouvementViewService } from 'app/main/apps/gestion-dechets/type-mouvement/type-mouvement-view/type-mouvement-view.service';

@Component({
  selector: 'app-type-mouvement-view',
  templateUrl: './type-mouvement-view.component.html',
  styleUrls: ['./type-mouvement-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TypeMouvementViewComponent implements OnInit, OnDestroy {
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
   * @param {TypeMouvementViewService} _typeMouvementViewService
   */
  constructor(private router: Router, private _typeMouvementViewService: TypeMouvementViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this._typeMouvementViewService.onTypeMouvementViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CategorieEquipementViewService } from 'app/main/apps/gmao/categorie-equipement/categorie-equipement-view/categorie-equipement-view.service';

@Component({
  selector: 'app-categorie-equipement-view',
  templateUrl: './categorie-equipement-view.component.html',
  styleUrls: ['./categorie-equipement-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategorieEquipementViewComponent implements OnInit, OnDestroy {
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
   * @param {CategorieEquipementViewService} _categorie-equipementViewService
   */
  constructor(private router: Router, private _categorieEquipementViewService: CategorieEquipementViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this._categorieEquipementViewService.onCategorieEquipementViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

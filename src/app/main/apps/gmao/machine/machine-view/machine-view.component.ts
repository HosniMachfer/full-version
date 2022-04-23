import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MachineViewService } from 'app/main/apps/gmao/machine/machine-view/machine-view.service';
import * as snippet from 'app/main/extensions/swiper/swiper.snippetcode';

import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-machine-view',
  templateUrl: './machine-view.component.html',
  styleUrls: ['./machine-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MachineViewComponent implements OnInit, OnDestroy {
  // public
  public url = this.router.url;
  public lastValue;
  public data;

  // private
  private _unsubscribeAll: Subject<any>;

    // snippet code variables
    public _snippetCodeSwiperDefault = snippet.snippetCodeSwiperDefault;
    public _snippetCodeSwiperNavigations = snippet.snippetCodeSwiperNavigations;
    public _snippetCodeSwiperPaginations = snippet.snippetCodeSwiperPaginations;
    public _snippetCodeSwiperProgress = snippet.snippetCodeSwiperProgress;
    public _snippetCodeSwiperMultiple = snippet.snippetCodeSwiperMultiple;
    public _snippetCodeSwiperCenteredSlides1 = snippet.snippetCodeSwiperCenteredSlides1;
    public _snippetCodeSwiperCenteredSlides2 = snippet.snippetCodeSwiperCenteredSlides2;
    public _snippetCodeSwiperFadeEffect = snippet.snippetCodeSwiperFadeEffect;
    public _snippetCodeSwiperCubeEffect = snippet.snippetCodeSwiperCubeEffect;
    public _snippetCodeSwiperCoverflow = snippet.snippetCodeSwiperCoverflow;
    public _snippetCodeSwiperAutoplay = snippet.snippetCodeSwiperAutoplay;
    public _snippetCodeSwiperLazy = snippet.snippetCodeSwiperLazy;
    public _snippetCodeSwiperResponsive = snippet.snippetCodeSwiperResponsive;
  /**
   * Constructor
   *
   * @param {Router} router
   * @param {MachineViewService} _machineViewService
   */
  constructor(private router: Router, private _machineViewService: MachineViewService) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }


  public swiperMultiple: SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    console.log("************************** je suis dans ngOnInit machine view --------------");
    this._machineViewService.onMachineViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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

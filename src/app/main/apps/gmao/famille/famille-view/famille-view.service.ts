import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { environment } from 'environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class FamilleGmaoViewService implements Resolve<any> {
  public rows: any;
  public onFamilleViewChanged: BehaviorSubject<any>;
  public id;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onFamilleViewChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    let currentId = Number(route.paramMap.get('id'));
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getApiData(currentId)]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get rows
   */
  getApiData(id: number): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.apiUrl}`+'/diva-erp-rest-api-cfg/famille/'+`${id}`).subscribe((response: any) => {
        this.rows = response;
        this.onFamilleViewChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }

getFamille(route: ActivatedRouteSnapshot): Observable<any[]> {
    let currentId = Number(route.paramMap.get('id'));
    return this._httpClient.get<any>(`${environment.apiUrl}`+'/diva-erp-rest-api-cfg/famille'+`${currentId}`,  httpOptions);
}
}

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { environment } from 'environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class ModuleApplicatifViewService implements Resolve<any> {
  public rows: any;
  public onModuleApplicatifViewChanged: BehaviorSubject<any>;
  public id;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onModuleApplicatifViewChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    console.log("TA MERE ...........");
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
    console.log("detail module-applicatif --------------------------");
    console.log(id);
    console.log("detail module-applicatif --------------------------");
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.apiUrl}`+'/module-applicatif/'+`${id}`).subscribe((response: any) => {
        this.rows = response;
        this.onModuleApplicatifViewChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }

getModuleApplicatif(route: ActivatedRouteSnapshot): Observable<any[]> {
    let currentId = Number(route.paramMap.get('id'));
    return this._httpClient.get<any>(`${environment.apiUrl}`+'/module-applicatif'+`${currentId}`,  httpOptions);
}
}

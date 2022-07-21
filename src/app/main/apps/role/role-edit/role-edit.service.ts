import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { environment } from 'environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';

import { Person, DataService } from 'app/main/forms/form-elements/select/data.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class RoleEditService implements Resolve<any> {
  public apiData: any;
  public onRoleEditChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onRoleEditChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getApiData()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get API Data
   */
  getApiData(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.apiUrl}`+'/roles').subscribe((response: any) => {
        this.apiData = response;
        this.onRoleEditChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }
 
getAll(): Observable<any[]> {
    return this._httpClient.get<any[]>(`${environment.apiUrl}`+'/roles',  httpOptions);
}

// create(data: any): Observable<any> {
//   console.log("------------------------------------");
//   console.log(data);
//   console.log("------------------------------------");
//     return this._httpClient.post(`${environment.apiUrl}`+'/roles', data);
// }
update(data: any): Observable<any> {
  return this._httpClient.put(`${environment.apiUrl}`+'/roles', data);
}
getByid(id:number):Observable<any>{
return this._httpClient.get(`${environment.apiUrl}/roles/${id}`)
}
create(data: any): Observable<any> {
return this._httpClient.post(`${environment.apiUrl}`+'/roles', data);
}

}

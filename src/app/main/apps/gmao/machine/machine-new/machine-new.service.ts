import { HttpEvent,HttpRequest,HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { environment } from 'environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';

import { Person, DataService } from 'app/main/forms/form-elements/select/data.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class MachineNewService implements Resolve<any> {
  public apiData: any;
  public onMachineNewChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onMachineNewChanged = new BehaviorSubject({});
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
      this._httpClient.get(`${environment.apiUrl}`+'/diva-erp-rest-api-gmao/machines').subscribe((response: any) => {
        this.apiData = response;
        this.onMachineNewChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }
 
getAll(): Observable<any[]> {
    return this._httpClient.get<any[]>(`${environment.apiUrl}`+'/diva-erp-rest-api-gmao/machines',  httpOptions);
}

create(data: any): Observable<any> {
  console.log("-----------creationmachine-------------------------");
  console.log(data);
  console.log("------------------------------------");
    return this._httpClient.post(`${environment.apiUrl}`+'/diva-erp-rest-api-gmao/add-machine', data);
}
upload(file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();
  formData.append('file', file);
  const req = new HttpRequest('POST', 'http://localhost:8080/diva-erp-rest-api-gmao/api/files', formData, {
    reportProgress: true,
    responseType: 'json'
  });
  return this._httpClient.request(req);
}
getFiles(): Observable<any> {
  return this._httpClient.get(`${environment.apiUrl}`+'/files');
}

}

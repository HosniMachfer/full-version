import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ModuleApplicatifListService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}`+'/module-applicatifs',  httpOptions);
  }
  getModuleApplicatifByCode(code: string): Observable<any[]> {
    return this.http.get<any>(`${environment.apiUrl}`+'/module-applicatif-by-code/'+code,  httpOptions);
  }
  hasRole(data: any): Observable<any[]> {
    console.log("je suis dans le service ----------------------");
    return this.http.post<any[]>(`${environment.apiUrl}`+'/menu-has-role', data);
    /*return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiUrl}`+'/menu-has-role', data).subscribe((response: any) => {}, reject);
    });*/
    /*
       return new Promise((resolve, reject) => {
      this._httpClient.post(`${environment.apiUrl}`+'/menu-has-role', data).subscribe(response => {
        resolve(response);
      }, reject);
    });
    */

    
}
}
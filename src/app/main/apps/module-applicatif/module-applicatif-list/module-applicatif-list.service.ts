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
  menuWithHasRoles(data: any): Observable<any> {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(data);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      return this.http.post(`${environment.apiUrl}`+'/menu-has-role', {
        "id": "dashboard",
        "title": "Dashboard",
        "translate": "MENU.DASHBOARD.COLLAPSIBLE",
        "type": "item",
        "icon": "home",
        "url": "dashboard/ecommerce"
    });
  }
}

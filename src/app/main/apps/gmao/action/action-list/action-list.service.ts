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
export class ActionListService {

  constructor(private http: HttpClient,private _httpClient: HttpClient) { }
  
getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}`+'/action',  httpOptions);
}

delete(id: number): Observable<any> {
  return this._httpClient.delete(`${environment.apiUrl}/action/${id}` );
}
}

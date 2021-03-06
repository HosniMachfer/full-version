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
export class EmplacementListService {

  constructor(private http: HttpClient) { }
  
getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}`+'/emplacement',  httpOptions);
}
}

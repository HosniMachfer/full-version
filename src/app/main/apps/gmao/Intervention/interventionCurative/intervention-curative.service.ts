
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environmentNode } from 'environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class InterventionCurativeService {

  constructor(private http: HttpClient) { }
  
getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${environmentNode.apiUrl}/intervention`);
}

getById(id:number): Observable<any[]> {
  return this.http.get<any[]>(`${environmentNode.apiUrl}/intervention/'${id}'`);
}

Add(data: any): Observable<any[]> {
  return this.http.post<any[]>(`${environmentNode.apiUrl}/intervention`,data,httpOptions);
}
update(data: any): Observable<any[]> {
  return this.http.put<any[]>(`${environmentNode.apiUrl}/intervention`,data,httpOptions);
}
delete(id : number): Observable<any[]> {
  return this.http.delete<any[]>(`${environmentNode.apiUrl}/intervention/'${id}'`);
}

}

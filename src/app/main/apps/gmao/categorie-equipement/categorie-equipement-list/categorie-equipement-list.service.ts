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
export class CategorieEquipementListService {

  constructor(private http: HttpClient) { }
  
getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}`+'/familleEquipement',  httpOptions);
}

delete(id: number): Observable<any[]> {
  return this.http.delete<any[]>(`${environment.apiUrl}/familleEquipement/'${id}'`,  httpOptions);
}

update(id: number): Observable<any[]> {
  return this.http.put<any[]>(`${environment.apiUrl}/familleEquipement/'${id}'`,  httpOptions);
}
}

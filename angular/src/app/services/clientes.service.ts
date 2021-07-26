import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http: HttpClient,
  ) { }

  getCliente(): Observable<any> {
          
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');;

    const actionUrl = 'http://localhost:3080/api/users';

    return this.http.get(
         actionUrl, { headers }
    );
    
}
}

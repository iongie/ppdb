import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(
    private http: HttpClient
  ) { }

  post(data: any, page_url: string, token?: string){
    const barrier = token !== undefined
    ? {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      })
    }
    : undefined;
    return this.http.post(environment.URL_API+page_url, data, barrier).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    )
  }

  get(page_url?: string, token?: string){
    const barrier = token !== undefined
    ? {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      })
    }
    : undefined;
    return this.http.get(
      environment.URL_API+page_url,
      barrier
    ).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    )
  }

  getWithParam(page_url?: string, param_name?: string, param_value?: number, token?: string){
    const barrier = token !== undefined ?  new HttpHeaders({
      Authorization: 'Bearer ' + token
    }): undefined;
    return this.http.get(
      environment.URL_API+page_url,
      {
        params: new HttpParams().set(param_name!, param_value!.toString()),
        headers: barrier
      }
    ).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    )
  }

  getIp(page_url?: string){
    return this.http.get(
      environment.URL_API_MAIN+page_url
    ).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    )
  }
}

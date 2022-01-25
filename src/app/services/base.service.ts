import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url: string = environment.url;
  endpoint: string = '';
  constructor(private http: HttpClient, private router: Router) { }

  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }

  private getHttpOptions() {
    const httpOptions: any = {};
    const token = localStorage.getItem('JWT');
    token
      ? (httpOptions['headers'] = new HttpHeaders({
        Authorization: token
      })) : null;

    return httpOptions;

  }

  async get() {
    try {
      return await this.http.get(`${this.url}/${this.endpoint}`, this.getHttpOptions()).toPromise();
    }
    catch (err) {
      return this.handlerError(err);
    }
  }

  async post(obj: any) {
    try {
      return await this.http.post(`${this.url}/${this.endpoint}`, obj, this.getHttpOptions()).toPromise();
    }
    catch (err) {
      return this.handlerError(err);
    }
  }
  async put(obj: any){
    try {
      return await this.http.put(`${this.url}/${this.endpoint}`, obj, this.getHttpOptions()).toPromise();
    }
    catch (err) {
      return this.handlerError(err);
    }
  }

  handlerError(err: any) {
    err.status == 401 ? this.router.navigate(['account/login']) : null;
    err.status == 404 ? this.router.navigate(['notfound']) : null;
  }
}

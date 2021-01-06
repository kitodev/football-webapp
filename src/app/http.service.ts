import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getPackedSettings } from 'http2';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  getAPIDATA() {
    return console.log('Iam the api');
  }
}

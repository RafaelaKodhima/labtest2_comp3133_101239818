import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  url = 'https://api.spacexdata.com/v3/launches'
  constructor(private http:HttpClient) { }
  getLaunches(){
    return this.http.get(this.url);
  }
}

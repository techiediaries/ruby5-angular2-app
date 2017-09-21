import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  API_URL : string = "http://localhost:3000/";
  constructor(public http: HttpClient) { }

  public get(path) {
      
      var endpoint = this.API_URL + path;
      return this.http.get(endpoint);

  }


  public post(path:string,body:any) {
      
      var endpoint = this.API_URL + path;
      return this.http.post(endpoint,body);

  }

  public delete(path:string){

    var endpoint = this.API_URL + path;
    return this.http.delete(endpoint);

  }  

  public update(path:string, body:any){
    var endpoint = this.API_URL + path;
    return this.http.put(endpoint,body);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private API_SERVER = "http://localhost:8080/client";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getClients(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveClient(client: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, client);
  }
}

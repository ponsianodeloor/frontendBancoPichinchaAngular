import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AccountTypesService {
  private API_SERVER = "http://localhost:8080/account_type";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAccountTypes(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveAccountType(accountType: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, accountType);
  }

}

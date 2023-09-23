import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private API_SERVER = "http://localhost:8080/account";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAccounts(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveAccount(account: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, account);
  }

}

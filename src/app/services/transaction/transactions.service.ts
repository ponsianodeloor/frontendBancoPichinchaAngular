import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private API_SERVER = "http://localhost:8080/transaction";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getTransactions(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveTransaction(transaction: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, transaction);
  }

}

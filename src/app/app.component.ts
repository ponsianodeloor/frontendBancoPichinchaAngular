import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

import { PersonsService } from "./services/person/persons.service";
import { ClientsService } from "./services/client/clients.service";
import { AccountTypesService } from "./services/accountType/account-types.service";
import { AccountsService } from "./services/account/accounts.service";
import { TransactionsService } from "./services/transaction/transactions.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontendBancoPichinchaAngular';
  personForm: FormGroup;
  clientForm: FormGroup;
  accountTypesForm: FormGroup;
  accountForm: FormGroup;
  transactionForm: FormGroup;
  persons: any;
  clients: any;
  accountTypes: any;
  accounts: any;
  transactions: any;

  constructor(
    public fb:FormBuilder,
    public personsService: PersonsService,
    public clientsService: ClientsService,
    public accountTypesService: AccountTypesService,
    public accountsService: AccountsService,
    public transactionsService: TransactionsService,
  ) {
    this.personForm = this.fb.group({ } );
    this.clientForm = this.fb.group({ } );
    this.accountTypesForm = this.fb.group({ } );
    this.accountForm = this.fb.group({ } );
    this.transactionForm = this.fb.group({ } );
  }

  ngOnInit() {
    this.personForm = this.fb.group({
      identification: [''],
      name: [''],
      age: [''],
      address: [''],
      phone: [''],
    } );

    this.clientForm = this.fb.group({
      person: [''],
      password: [''],
    } );

    this.accountTypesForm = this.fb.group({
      name: [''],
    });

    this.accountForm = this.fb.group({
      client: [''],
      accountType: [''],
      balance: [''],
      numberAccount: [''],
    });

    this.transactionForm = this.fb.group({
      account: [''],
      amount: [''],
      transactionType: [''],
    });

    this.getPersons()
    this.getClients()
    this.getAccountTypes()
    this.getAccounts()
    this.getTransactions()

  }

  getPersons() {
    this.personsService.getPersons().subscribe((data: any) => {
      this.persons = data;
    });
  }

  savePerson() {
    this.personsService.savePerson(this.personForm.value).subscribe((data: any) => {
      this.personForm.reset();
      this.getPersons();
    });
  }

  getClients() {
    this.clientsService.getClients().subscribe((data: any) => {
      this.clients = data;
    });
  }

  saveClient() {
    //modificar el objeto person para que solo tenga el id en json hijo
    this.clientForm.value.person = {id: this.clientForm.value.person};

    this.clientsService.saveClient(this.clientForm.value).subscribe((data: any) => {
      console.log(data);
      this.clientForm.reset();
      this.getClients();
      this.clients.push(data);
    });
  }

  getAccountTypes() {
    this.accountTypesService.getAccountTypes().subscribe((data: any) => {
      this.accountTypes = data;
    });
  }

  saveAccountType() {
    this.accountTypesService.saveAccountType(this.accountTypesForm.value).subscribe((data: any) => {
      this.accountTypesForm.reset();
      this.getAccountTypes();
    });
  }

  getAccounts() {
    this.accountsService.getAccounts().subscribe((data: any) => {
      this.accounts = data;
    });
  }

  saveAccount() {
    //modificar el objeto client para que solo tenga el id en json hijo
    this.accountForm.value.client = {id: this.accountForm.value.client};
    this.accountForm.value.accountType = {id: this.accountForm.value.accountType};

    this.accountsService.saveAccount(this.accountForm.value).subscribe((data: any) => {
      this.accountForm.reset();
      this.getAccounts();
    });
  }

  getTransactions() {
    this.transactionsService.getTransactions().subscribe((data: any) => {
      this.transactions = data;
    });
  }

  saveTransaction() {
    //modificar el objeto client para que solo tenga el id en json hijo
    this.transactionForm.value.account = {id: this.transactionForm.value.account};

    this.transactionsService.saveTransaction(this.transactionForm.value).subscribe((data: any) => {
      this.transactionForm.reset();
      this.getAccounts();
      this.getTransactions();
    });
  }

}

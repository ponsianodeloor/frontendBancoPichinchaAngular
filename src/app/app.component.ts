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
  }

  ngOnInit() {
    this.personForm = this.fb.group({
      identification: [''],
      name: [''],
      age: [''],
      address: [''],
      phone: [''],
    } );

    this.getPersons()
    this.getClients()

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
    this.clientsService.saveClient(this.clientForm.value).subscribe((data: any) => {
      this.clientForm.reset();
      this.getClients();
    });
  }



}

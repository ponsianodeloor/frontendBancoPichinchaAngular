import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendBancoPichinchaAngular';

  constructor(public fb:FormBuilder) {

  }

  ngOnInit() {

  }

}

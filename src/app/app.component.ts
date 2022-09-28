import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  public contact: contact;
  public reactiveContactForm: FormGroup;
  public details: contact;
  ngOnInit() {
    this.contact = {
      firstname: '',
      lastname: '',
    };
    this.reactiveContactForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
    });
  }
  onSubmit() {
    this.details = Object.assign({}, this.contact);
  }
  onReactiveFormSubmit() {
    this.details = {
      firstname: this.reactiveContactForm.value.firstname,
      lastname: this.reactiveContactForm.value.lastname,
    };
  }
}

export class contact {
  firstname: string;
  lastname: string;
}

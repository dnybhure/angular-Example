import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  public contact: contact;
  public details: contact;
  ngOnInit() {
    this.contact = {
      firstname: '',
      lastname: '',
    };
  }
  onSubmit() {
    console.log(this.contact);
    this.details = Object.assign({}, this.contact);
  }
}

export class contact {
  firstname: string;
  lastname: string;
}

import { Component, Input, OnInit } from '@angular/core';
import { contact } from '../app.component';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  @Input('details') details: contact;
  public firstname: string = '';
  public lastname: string = '';
  constructor() {}

  ngOnInit() {
    console.log(this.details);
  }
}

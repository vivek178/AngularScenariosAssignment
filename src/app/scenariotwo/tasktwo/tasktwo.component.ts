import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasktwo',
  templateUrl: './tasktwo.component.html',
  styleUrls: ['./tasktwo.component.css']
})
export class TasktwoComponent implements OnInit {

  public valueTyped : string;

  constructor() {
    this.valueTyped = '';
   }

  ngOnInit() {
  }

}

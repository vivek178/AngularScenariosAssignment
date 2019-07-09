import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskone',
  templateUrl: './taskone.component.html',
  styleUrls: ['./taskone.component.css']
})
export class TaskoneComponent implements OnInit {

  Clicked(data) {
    console.log(data);
  }

  constructor() { }

  ngOnInit() {
  }

}

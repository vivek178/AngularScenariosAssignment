import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public texttrans = '';

  Clicked(data) {
    this.texttrans = data;
    // console.log(data);
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childleft',
  templateUrl: './childleft.component.html',
  styleUrls: ['./childleft.component.css']
})
export class ChildleftComponent implements OnInit {

  @Output() public childRefrence = new EventEmitter();

  Clicked(data) {
    this.childRefrence.emit(data);
    // console.log(this.childRefrence);
    // console.log(data);
  }

  constructor() { }

  ngOnInit() {
  }

}

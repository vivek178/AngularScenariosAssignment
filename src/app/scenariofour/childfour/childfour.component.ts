import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childfour',
  templateUrl: './childfour.component.html',
  styleUrls: ['./childfour.component.css']
})
export class ChildfourComponent implements OnInit {

  @Output() public childRefrence = new EventEmitter();

  Clicked(data){
    this.childRefrence.emit(data);
  }

  constructor() { }

  ngOnInit() {
  }

}

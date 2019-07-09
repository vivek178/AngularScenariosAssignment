import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Output() public firstRefrence = new EventEmitter();

  Clicked(data){
    this.firstRefrence.emit(data);
  }

  constructor() { }

  ngOnInit() {
  }

}

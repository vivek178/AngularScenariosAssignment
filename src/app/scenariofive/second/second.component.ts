import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Output() public secondRefrence = new EventEmitter();

  valueForward(data){
    this.secondRefrence.emit(data);
  }

  constructor() { }

  ngOnInit() {
  }

}

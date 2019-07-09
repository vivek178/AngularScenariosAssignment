import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public parentData = '';

  // print(){
    // console.log(this.parentData);
  // }

  constructor() { }

  ngOnInit() {
    console.log(this.parentData);

  }


}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childright',
  templateUrl: './childright.component.html',
  styleUrls: ['./childright.component.css']
})
export class ChildrightComponent implements OnInit {

  @Input() public ParentRefrence: any;

  constructor() { }

  ngOnInit() {
  }

}

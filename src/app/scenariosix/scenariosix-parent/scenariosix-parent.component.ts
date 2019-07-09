import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenariosix-parent',
  templateUrl: './scenariosix-parent.component.html',
  styleUrls: ['./scenariosix-parent.component.css']
})
export class ScenariosixParentComponent implements OnInit {

  public ParentVariable = '';

  Recived(data) {
    this.ParentVariable = data;
    // console.log(this.ParentVariable);
    // console.log(data);
  }

  constructor() { }

  ngOnInit() {
  }

}

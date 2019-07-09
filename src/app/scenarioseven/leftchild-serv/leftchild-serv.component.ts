import { Component, OnInit } from '@angular/core';
import { BindingServiceService } from '../binding-service.service';

@Component({
  selector: 'app-leftchild-serv',
  templateUrl: './leftchild-serv.component.html',
  styleUrls: ['./leftchild-serv.component.css']
})
export class LeftchildServComponent implements OnInit {

  leftchild: string;
  one: string;

  constructor(private servvicebinding: BindingServiceService) { }

  clicked(data){
    this.servvicebinding.editServices(data);
  }

  ngOnInit() {
    this.servvicebinding.cast.subscribe( leftchild => {
      this.leftchild = leftchild;
      console.log(this.leftchild);
     });

  }

}

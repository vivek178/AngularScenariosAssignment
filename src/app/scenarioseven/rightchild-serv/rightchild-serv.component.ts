import { Component, OnInit } from '@angular/core';
import { BindingServiceService } from '../binding-service.service';

@Component({
  selector: 'app-rightchild-serv',
  templateUrl: './rightchild-serv.component.html',
  styleUrls: ['./rightchild-serv.component.css']
})
export class RightchildServComponent implements OnInit {

  rightchild: string;

  constructor(private servicebinding: BindingServiceService) { }

  ngOnInit() {
    this.servicebinding.cast.subscribe(rightchild =>{
      this.rightchild = rightchild;
    });
  }

}

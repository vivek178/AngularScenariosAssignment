import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BindingServiceService {

  private bindingService =  new BehaviorSubject<string>('');

  cast = this.bindingService.asObservable();

  editServices(data) {
    this.bindingService.next(data);
  }



  constructor() { }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftchildServComponent } from './leftchild-serv.component';

describe('LeftchildServComponent', () => {
  let component: LeftchildServComponent;
  let fixture: ComponentFixture<LeftchildServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftchildServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftchildServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

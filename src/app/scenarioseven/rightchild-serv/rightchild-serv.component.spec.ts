import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightchildServComponent } from './rightchild-serv.component';

describe('RightchildServComponent', () => {
  let component: RightchildServComponent;
  let fixture: ComponentFixture<RightchildServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightchildServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightchildServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

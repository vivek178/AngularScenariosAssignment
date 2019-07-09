import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildleftComponent } from './childleft.component';

describe('ChildleftComponent', () => {
  let component: ChildleftComponent;
  let fixture: ComponentFixture<ChildleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

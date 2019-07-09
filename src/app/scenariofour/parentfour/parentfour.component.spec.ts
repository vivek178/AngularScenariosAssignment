import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentfourComponent } from './parentfour.component';

describe('ParentfourComponent', () => {
  let component: ParentfourComponent;
  let fixture: ComponentFixture<ParentfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

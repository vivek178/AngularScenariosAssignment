import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrightComponent } from './childright.component';

describe('ChildrightComponent', () => {
  let component: ChildrightComponent;
  let fixture: ComponentFixture<ChildrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

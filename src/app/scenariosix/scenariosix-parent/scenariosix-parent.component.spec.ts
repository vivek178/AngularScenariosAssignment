import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenariosixParentComponent } from './scenariosix-parent.component';

describe('ScenariosixParentComponent', () => {
  let component: ScenariosixParentComponent;
  let fixture: ComponentFixture<ScenariosixParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenariosixParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenariosixParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

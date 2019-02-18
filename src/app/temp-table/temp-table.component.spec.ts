import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempTableComponent } from './temp-table.component';

describe('TempTableComponent', () => {
  let component: TempTableComponent;
  let fixture: ComponentFixture<TempTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

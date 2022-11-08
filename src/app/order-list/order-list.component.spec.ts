import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrlderListComponent } from './order-list.component';

describe('CaseReportComponent', () => {
  let component: OrlderListComponent;
  let fixture: ComponentFixture<OrlderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrlderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrlderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

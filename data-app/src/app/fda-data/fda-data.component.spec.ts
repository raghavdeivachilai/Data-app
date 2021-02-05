import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdaDataComponent } from './fda-data.component';

describe('FdaDataComponent', () => {
  let component: FdaDataComponent;
  let fixture: ComponentFixture<FdaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdaDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

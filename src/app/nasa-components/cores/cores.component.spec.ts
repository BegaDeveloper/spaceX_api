import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoresComponent } from './cores.component';

describe('CoresComponent', () => {
  let component: CoresComponent;
  let fixture: ComponentFixture<CoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

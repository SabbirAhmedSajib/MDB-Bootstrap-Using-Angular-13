import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DRCreateComponent } from './drcreate.component';

describe('DRCreateComponent', () => {
  let component: DRCreateComponent;
  let fixture: ComponentFixture<DRCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DRCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DRCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

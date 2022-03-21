import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VICreateComponent } from './vicreate.component';

describe('VICreateComponent', () => {
  let component: VICreateComponent;
  let fixture: ComponentFixture<VICreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VICreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VICreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

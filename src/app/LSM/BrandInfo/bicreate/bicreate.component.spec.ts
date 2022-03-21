import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BICreateComponent } from './bicreate.component';

describe('BICreateComponent', () => {
  let component: BICreateComponent;
  let fixture: ComponentFixture<BICreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BICreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BICreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

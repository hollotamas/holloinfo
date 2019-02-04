import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErettsegiTipusComponent } from './erettsegi-tipus.component';

describe('ErettsegiTipusComponent', () => {
  let component: ErettsegiTipusComponent;
  let fixture: ComponentFixture<ErettsegiTipusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErettsegiTipusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErettsegiTipusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErettsegiTipusListCardComponent } from './erettsegi-tipus-list-card.component';

describe('ErettsegiTipusListCardComponent', () => {
  let component: ErettsegiTipusListCardComponent;
  let fixture: ComponentFixture<ErettsegiTipusListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErettsegiTipusListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErettsegiTipusListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

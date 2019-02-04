import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErettsegiTipusListComponent } from './erettsegi-tipus-list.component';

describe('ErettsegiTipusListComponent', () => {
  let component: ErettsegiTipusListComponent;
  let fixture: ComponentFixture<ErettsegiTipusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErettsegiTipusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErettsegiTipusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

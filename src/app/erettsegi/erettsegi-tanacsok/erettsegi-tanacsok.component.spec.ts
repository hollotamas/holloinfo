import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErettsegiTanacsokComponent } from './erettsegi-tanacsok.component';

describe('ErettsegiTanacsokComponent', () => {
  let component: ErettsegiTanacsokComponent;
  let fixture: ComponentFixture<ErettsegiTanacsokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErettsegiTanacsokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErettsegiTanacsokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

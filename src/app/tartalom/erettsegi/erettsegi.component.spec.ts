import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErettsegiComponent } from './erettsegi.component';

describe('ErettsegiComponent', () => {
  let component: ErettsegiComponent;
  let fixture: ComponentFixture<ErettsegiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErettsegiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErettsegiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

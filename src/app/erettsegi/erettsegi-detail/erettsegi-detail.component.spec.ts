import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErettsegiDetailComponent } from './erettsegi-detail.component';

describe('ErettsegiDetailComponent', () => {
  let component: ErettsegiDetailComponent;
  let fixture: ComponentFixture<ErettsegiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErettsegiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErettsegiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

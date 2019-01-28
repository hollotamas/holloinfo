import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TartalomComponent } from './tartalom.component';

describe('TartalomComponent', () => {
  let component: TartalomComponent;
  let fixture: ComponentFixture<TartalomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TartalomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TartalomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

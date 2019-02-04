import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErettsegiPostComponent } from './erettsegi-post.component';

describe('ErettsegiPostComponent', () => {
  let component: ErettsegiPostComponent;
  let fixture: ComponentFixture<ErettsegiPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErettsegiPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErettsegiPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

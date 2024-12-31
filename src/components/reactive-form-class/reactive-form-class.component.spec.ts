import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormClassComponent } from './reactive-form-class.component';

describe('ReactiveFormClassComponent', () => {
  let component: ReactiveFormClassComponent;
  let fixture: ComponentFixture<ReactiveFormClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

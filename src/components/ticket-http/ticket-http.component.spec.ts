import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketHttpComponent } from './ticket-http.component';

describe('TicketHttpComponent', () => {
  let component: TicketHttpComponent;
  let fixture: ComponentFixture<TicketHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketHttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

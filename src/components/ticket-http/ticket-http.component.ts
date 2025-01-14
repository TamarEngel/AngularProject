import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-ticket-http',
  standalone: true,
  imports: [AsyncPipe,JsonPipe,HttpClientModule],
  providers:[TicketsService],
  templateUrl: './ticket-http.component.html',
  styleUrl: './ticket-http.component.css'
})
export class TicketHttpComponent implements OnInit{
  constructor(public ticketService:TicketsService){}
  ngOnInit(): void {
    this.ticketService.getTickets();
  }
}

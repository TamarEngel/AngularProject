import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ticket } from '../../models/ticket';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private url="https://localhost:7071/api/Ticket";
  ticket$:Observable<Ticket[]> | undefined;
  constructor(private http:HttpClient) {}

  getTickets(){
    this.http.get<Ticket[]>(this.url).subscribe(data=>{
      this.ticket$=of(data);
    })
  }
}

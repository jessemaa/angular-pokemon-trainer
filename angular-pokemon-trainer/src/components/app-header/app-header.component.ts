import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(
    private readonly sessionService: SessionService
  ) { }

  ngOnInit(): void {
  }

  get hasActiveSession(): boolean {
    return this.sessionService.active();
  }

}

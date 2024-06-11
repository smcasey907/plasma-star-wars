import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HttpClientModule],
  providers: [HttpClient],
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'frontend';
  message = 'HELLO WORLD';

  constructor() {}

  ngOnInit() {
    console.log('Initted');
  }
}

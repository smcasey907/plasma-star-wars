import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SwapiService } from './services/swapi.service';
import { Film } from './interfaces/film';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatListModule],
  providers: [HttpClient],
  standalone: true,
})
export class AppComponent implements OnInit {
  films: Film[] = [];
  buttonClicked: boolean = false;
  errors: string[] = [];
  loading: boolean = false;

  constructor(
    private service: SwapiService,
    private zone: NgZone
  ) {}

  ngOnInit() {
    console.log('Initted');
  }

  getFilms() {
    this.zone.run(() => {
      this.loading = true;
    })
    this.loading = true;
    console.log('loading is ', this.loading)
    this.service.getFilms().subscribe({
      next: (films) => {
        this.zone.run(() => {
          this.films = films;
          this.loading = false;
        })
      },
      error: (error) => {
        this.zone.run(() => {
          this.errors.push(error);
          this.loading = false;
        });
      },
    });
  }

  /**
   * TODO:
   * 1. Add filter options that will filter films by specific parameters
   * 2. Add sort options that will sort films by specific parameters
   * 3. Add pagination to the list of films
   * 4. Parallax?
   * 5. Add a search bar that will filter films by title
   * 6. Add a possible display filter to sort what is displayed on the card
   **/
}

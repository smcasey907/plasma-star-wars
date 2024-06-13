import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Film } from '../interfaces/film';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  filmAPI = 'https://swapi.dev/api/films/';
  

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<{ results: Film[] }>(this.filmAPI).pipe(
      map(films => films.results)
    );
  }
}

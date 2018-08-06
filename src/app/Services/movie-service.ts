
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../Models/movie/movie';
import { MOVIES } from './mock-movies/mock-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  GetMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }

  getMovie(id: number): Observable<Movie>
  {
    return of(MOVIES.find(m => m.MovieId === id));
  }
}


import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../Models/movie/movie';
import { MOVIES } from './mock-movies/mock-movies';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  GetMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiUrl}/Bollywood/Movies`);
  }

  getMovie(id: number): Observable<Movie>
  {
    return this.http.get<Movie>(`${environment.apiUrl}/Bollywood/GetMovieById/`+id);
  }
}

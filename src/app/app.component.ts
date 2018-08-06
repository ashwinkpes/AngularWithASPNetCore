import { Component, OnInit } from '@angular/core';
import { Movie } from './Models/movie/movie';
import { MovieService } from './Services/movie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  AppTitle:string = 'Bollywood Movies'
  title:string = 'Movies';
  Movies : Movie[];

  constructor(private movieService : MovieService)
  {
    console.log('ctor is called!!!');
  }

  ngOnInit(): void {
    console.log('Init is called!!!');
    this.movieService.GetMovies()
    .subscribe(movies => this.Movies = movies);
    console.log(JSON.stringify(this.Movies));
  }
  

}

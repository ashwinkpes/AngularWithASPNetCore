import { MovieService } from './../../Services/movie-service';
import { Movie } from './../../Models/movie/movie';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  title: string = 'Movies';
  Movies: Movie[];

  constructor(private movieService: MovieService) { console.log('ctor is called!!!'); }

  ngOnInit() {
    console.log('Init is called!!!');
    this.movieService.GetMovies()
      .subscribe(movies => this.Movies = movies);
    console.log(JSON.stringify(this.Movies));
  }

}

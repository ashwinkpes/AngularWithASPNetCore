import { Movie } from './../Models/movie/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../Services/movie-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  MovieData: Movie;
  constructor(private movieService: MovieService,  private route: ActivatedRoute, private location: Location) 
  { 
   
  }

  ngOnInit() : void {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('movieid');
    console.log('Id obtained is '+ id)
    this.movieService.getMovie(id)
      .subscribe(m => this.MovieData = m);
  }

  goBack(): void {
    this.location.back();
  }

}

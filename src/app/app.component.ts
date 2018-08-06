import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  AppTitle: string = 'Bollywood Movies'
  constructor()
  {
    console.log('ctor is called!!!');
  }

  ngOnInit(): void {
    console.log('Init is called!!!');   
  }
  

}

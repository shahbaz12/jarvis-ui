import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  item :any
  slides = [
    {
      img: "assets/Slider-1.jpg",
      heading:"Branding",
      details:"Digital Agency",
      count:"1"
  
  },
    {
      img: "assets/Slider-2.jpg",
      heading:"Ui/Ux",
      details:"Design",
      count:"2"
    },
    {
      img: "https://media.istockphoto.com/photos/american-football-action-picture-id510007585",
      heading:"Backend",
      details:"Digital Agency",
      count:"3"
  },
  ];
  constructor() {
  }
  ngOnInit() {
    sessionStorage.getItem('clickCounter');
    console.log("jjkkll",sessionStorage.getItem('clickCounter'))
  }

}

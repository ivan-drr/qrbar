import { Component, OnInit } from '@angular/core';
import { DrinkService } from '@core/services/drink.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  breakpoint: number;
  data: any = {
    "restaurant": {
      "menu": []
    }
  };

  constructor(private readonly drinkService: DrinkService) {}

  ngOnInit(): void {
    this.data = this.drinkService.getDrinks();
    console.log(this.data);
    

    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }

}

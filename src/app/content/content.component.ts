import { Component, OnInit } from '@angular/core';
import { MenuService } from '@core/services/menu.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  data: any = {
    "restaurant": {
      "menu": []
    }
  };

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 64, color: 'lightblue'},
    {text: 'Two', cols: 5, rows: 64, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 64, color: 'lightpink'},
    {text: 'Four', cols: 5, rows: 64, color: '#DDBDF1'},
    {text: 'One', cols: 1, rows: 64, color: 'lightblue'},
    {text: 'One', cols: 13, rows: 9, color: 'lightblue'},
  ];

  constructor(private readonly menuService: MenuService) {}

  ngOnInit(): void {
    this.data = this.menuService.getData();
    if (Object.keys(this.data).length === 0) {
      // handle menu is empty
    }
  }

}

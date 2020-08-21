import { Component, OnInit } from '@angular/core';
import { MenuService } from '@core/services/menu.service';

@Component({
  selector: 'app-sidenav-element',
  templateUrl: './sidenav-element.component.html',
  styleUrls: ['./sidenav-element.component.css']
})
export class SidenavElementComponent implements OnInit {

  data: any = {
    "restaurant": {
      "menu": []
    }
  };

  constructor(private readonly menuService: MenuService) {}

  ngOnInit(): void {
    this.data = this.menuService.getData();
    if (Object.keys(this.data).length === 0) {
      // handle menu is empty
    }
  }

}

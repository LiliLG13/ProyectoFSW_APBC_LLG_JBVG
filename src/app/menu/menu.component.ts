import { Component, OnInit } from '@angular/core';
import { ServiceMenuService } from './service-menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private servMenu: ServiceMenuService) { }
  categoria: string = '';
  hayError: boolean = false;

  ngOnInit(): void {
  }

}

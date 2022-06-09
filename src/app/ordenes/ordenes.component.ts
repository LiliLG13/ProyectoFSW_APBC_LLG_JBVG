import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css'],
})
export class OrdenesComponent implements OnInit {
  constructor() {}
  hayError: boolean = false;
  ordenExitosa: boolean = false;
  ngOnInit(): void {}
}

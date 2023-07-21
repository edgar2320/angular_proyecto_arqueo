import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-dashboard',
  templateUrl: './barra-dashboard.component.html',
  styleUrls: ['./barra-dashboard.component.css']
})
export class BarraDashboardComponent implements OnInit {
  @Input() titulo!:string;
  constructor() { }

  ngOnInit(): void {
  }

}

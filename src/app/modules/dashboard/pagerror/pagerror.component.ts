import { Component, OnInit } from '@angular/core';
import { LOGO_ERROR } from '../../constants/constantesgenerales';

@Component({
  selector: 'app-pagerror',
  templateUrl: './pagerror.component.html',
  styleUrls: ['./pagerror.component.css']
})
export class PagerrorComponent implements OnInit {
  img_error:string=LOGO_ERROR;
  constructor() { }

  ngOnInit(): void {
  }

}

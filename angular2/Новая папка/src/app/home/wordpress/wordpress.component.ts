import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.component.html',
  styleUrls: ['./wordpress.component.scss']
})
export class WordpressComponent implements OnInit {
 
    buttonBlock=[
    {title: 'Contact Us'},
    {title: 'Details More'},
    ];
  constructor() { }

  ngOnInit() {
  }

}

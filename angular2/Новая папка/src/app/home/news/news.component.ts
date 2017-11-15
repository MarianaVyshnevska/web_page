import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
    newsBlock = [
    	{image: "assets/images/images-artim-115.jpg", title: "What We Believe"},
    	{image: "assets/images/images-artim-113.jpg", title: "Enjoy Nature"},
    ];

  constructor() { }

  ngOnInit() {
  }

}

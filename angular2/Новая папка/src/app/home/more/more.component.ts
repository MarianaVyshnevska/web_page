import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {
  moreBlock = [
      {image: 'assets/images/image-1.jpg', title: 'What We Believe'},
      {image: 'assets/images/image-2.jpg', title: 'How We Work'},
      {image: 'assets/images/image-3.jpg', title: 'Enjoy Nature'},
  ];

  constructor() { }

  ngOnInit() {
  }

}

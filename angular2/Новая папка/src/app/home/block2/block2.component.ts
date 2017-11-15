import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block2',
  templateUrl: './block2.component.html',
  styleUrls: ['./block2.component.scss']
})
export class Block2Component implements OnInit {
	bBlock = [
		{title: "Enjoy Nature"},
		{title: "Breath Colour"},
		{title: "How We Work"},
		{title: "Campaign"},
	];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
     ourTeamBlock = [
         {image: "assets/images/avatar02.jpg", name: "David Miller", position: "CEO"},
         {image: "assets/images/avatar05.jpg", name: "Milla Smith", position: "Designer"},
         {image: "assets/images/avatar03.jpg", name: "David Miller", position: "Designer"},
     ];

       constructor() { }

  ngOnInit() {
  }

}

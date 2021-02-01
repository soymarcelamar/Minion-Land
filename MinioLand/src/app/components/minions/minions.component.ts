import { Component, OnInit } from '@angular/core';
import { MinionsService, Minion } from 'src/app/services/minions.service';

@Component({
  selector: 'app-minions',
  templateUrl: './minions.component.html',
  styleUrls: ['./minions.component.css']
})
export class MinionsComponent implements OnInit {

  minions: Minion[] = [];

  constructor(private minionsService: MinionsService) { }

  ngOnInit() {
    this.minions = this.minionsService.getMinions();
    console.log(this.minions);
  }
}

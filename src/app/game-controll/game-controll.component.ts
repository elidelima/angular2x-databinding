import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-controll',
  templateUrl: './game-controll.component.html',
  styleUrls: ['./game-controll.component.css']
})
export class GameControllComponent implements OnInit {

  eventReference = null;
  number = 0;
  gameResults = [];

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.eventReference = setInterval( () => {
      this.number += 1;
      this.gameResults.push(this.number);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.eventReference);
    this.number = 0;
  }

}

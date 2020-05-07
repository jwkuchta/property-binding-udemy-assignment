import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  myInterval;
  count = 0

  @Output() gameStarted = new EventEmitter<{count: number, inProgress: boolean}>()
  @Output() gameStopped = new EventEmitter<{count: number, inProgress: boolean}>()
  @Output() gamePaused = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.myInterval = setInterval(() => {
      this.gameStarted.emit({count: this.count +1, inProgress: true})
      this.count ++
    }, 1000)
  }

  onPauseGame() {
    clearInterval(this.myInterval)
    this.count = 0
    this.gameStopped.emit({
      count: this.count, inProgress: false
    })
  }

}

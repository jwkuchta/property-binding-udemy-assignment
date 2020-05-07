import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counts = []
  gameInProgress = true
  oddNums = []
  evenNums = []

  onGameStarted(data) {
    console.log(data)
    if(data.count % 2 === 0) {
      this.evenNums.push(data.count)
    } else {
      this.oddNums.push(data.count)
    }
    this.gameInProgress = data.inProgress
  }

  onGameStopped(data) {
    console.log(data)
    // this.count = data.count
    this.gameInProgress = data.inProgress
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css']
})
export class GameComponentComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  constructor() { 

  }

  ngOnInit() {

  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000)
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

  

  // counter: number = 0;
  // incrementer;
  // constructor() { }

  // ngOnInit() {
  // }

  // increment = function() {
  //   this.counter++;
  //   console.log(this.counter);
  // }

  // startCounter = function() {
  //   this.incrementer = setInterval(this.increment, 1000);
  // }

  // stopCounter = function() {
  //   clearInterval(this.incrementer);
  // }

}

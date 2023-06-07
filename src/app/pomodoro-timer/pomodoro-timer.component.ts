import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css'],
})
export class PomodoroTimerComponent implements OnInit {
  minutes: number = 25;
  seconds: number = 0;
  timerRunning: boolean = false;
  interval: any;
  workTime: number = 25;
  breakTime: number = 5;
  isWorkTime: boolean = true;
  cycles: number = 1;
  currentCycle: number = 1;

  ngOnInit() {
    this.resetTimer();
  }

  startTimer() {
    this.timerRunning = true;
    this.interval = setInterval(() => {
      if (this.minutes === 0 && this.seconds === 0) {
        this.pauseTimer();
        if (this.isWorkTime) {
          this.isWorkTime = false;
          this.minutes = this.breakTime;
        } else {
          this.isWorkTime = true;
          this.minutes = this.workTime;
          this.currentCycle++;
          if (this.currentCycle > this.cycles) {
            this.resetTimer();
            return;
          }
        }
        this.seconds = 0;
        setTimeout(() => {
          this.startTimer();
        }, 1000);
      } else {
        if (this.seconds === 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          this.seconds--;
        }
      }
    }, 5);
  }

  pauseTimer() {
    this.timerRunning = false;
    clearInterval(this.interval);
  }

  resetTimer() {
    this.timerRunning = false;
    clearInterval(this.interval);
    this.minutes = this.workTime;
    this.seconds = 0;
    this.isWorkTime = true;
    this.currentCycle = 1;
  }

  formatTime(): string {
    const minutesString = this.minutes.toString().padStart(2, '0');
    const secondsString = this.seconds.toString().padStart(2, '0');
    return `${minutesString}:${secondsString}`;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './auth.service';
import { PomodoroTimerComponent } from './pomodoro-timer/pomodoro-timer.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDSFnaj5Q77boaxucltF_NY-ax_4X5yutI',
      authDomain: 'todolist-65e04.firebaseapp.com',
      databaseURL: 'https://todolist-65e04-default-rtdb.firebaseio.com',
      projectId: 'todolist-65e04',
      storageBucket: 'todolist-65e04.appspot.com',
      messagingSenderId: '104538272650',
      appId: '1:104538272650:web:242b2d41ac54f7ff338e73',
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [RootComponent,PomodoroTimerComponent],
  bootstrap: [RootComponent, PomodoroTimerComponent],
  providers: [AuthService],
})
export class AppModule {}

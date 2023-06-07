import { Component, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  SnapshotAction,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { map } from 'rxjs/operators';

export interface Item {
  key: string;
  email: string;
  task: string;
  description: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit {
  isContainerVisible = false;
  email = '' as string;
  password = '' as string;

  formNewTask = '' as string;
  formNewDescription = '' as string;

  listRef: any;
  list: Observable<Item[]>;

  constructor(public auth: AuthService, private database: AngularFireDatabase) {
    this.listRef = database.list('list');
    this.list = this.listRef
      .snapshotChanges()
      .pipe(
        map((changes: SnapshotAction<Item>[]) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  ngOnInit() {}

  toggleContainerTodoList() {
    this.isContainerVisible = !this.isContainerVisible;
  }

  addItem() {
    this.listRef.push({
      task: this.formNewTask,
      description: this.formNewDescription,
    });
    this.formNewTask = '';
    this.formNewDescription = '';
  }

  deleteItem(key: string) {
    this.listRef.remove(key);
  }
}

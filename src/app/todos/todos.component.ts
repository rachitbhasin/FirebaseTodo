import { Component, OnInit } from '@angular/core';

import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import {ITodoService, Todo} from './todo.interface';

@Component({
  selector: 'my-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  items$: Observable<Todo[]>;

  constructor(private todoService: ITodoService) {}

  public onRemoveTodo(todo: Todo) {
    this.todoService.getItemsCollectionRef().doc(todo.id).delete().then((response) => {
      console.log('Todo deleted with id: ', todo.title);
    });
  }

  public onCompleteTodo(todo: Todo) {
    this.todoService.getItemsCollectionRef().doc(todo.id).update({ completed: !todo.completed }).then((response) => {
      console.log('Todo completed with id: ', todo.title);
    });
  }

  ngOnInit() {

    this.items$ = this.todoService.getItemsCollectionRef().snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Todo;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
  }
}

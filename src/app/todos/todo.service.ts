import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {ITodoService, Todo} from './todo.interface';

@Injectable()
export class TodoService implements ITodoService {
  private itemsCollectionRef: AngularFirestoreCollection<Todo>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollectionRef = this.afs.collection<Todo>('items');
  }

  public getItemsCollectionRef(): AngularFirestoreCollection<Todo> {
    return this.itemsCollectionRef;
  }
}

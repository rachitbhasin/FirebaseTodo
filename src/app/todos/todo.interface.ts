import {AngularFirestoreCollection} from 'angularfire2/firestore';
import {Injectable} from '@angular/core';

export interface Todo {
  id?: string;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable()
export abstract class ITodoService {
  abstract getItemsCollectionRef(): AngularFirestoreCollection<Todo>;
}

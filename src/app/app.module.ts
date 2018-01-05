import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { AppComponent } from './app.component';
import { FIREBASE } from '../environments/firebase.config';
import { SharedMaterialModule } from './shared/material.module';
import { TodosComponent } from './todos/todos.component';
import { HeaderComponent } from './header/header.component';
import {TodoService} from './todos/todo.service';
import {ITodoService} from './todos/todo.interface';
import { AddTodoDialogComponent } from './add-todo/add-todo-dialog/add-todo-dialog.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeaderComponent,
    AddTodoDialogComponent,
    AddTodoComponent
  ],
  imports: [
    AngularFireModule.initializeApp(FIREBASE.config),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    SharedMaterialModule
  ],
  providers: [
    { provide: ITodoService, useClass: TodoService }
  ],
  entryComponents: [
    AddTodoDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

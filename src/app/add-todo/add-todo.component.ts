import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddTodoDialogComponent} from './add-todo-dialog/add-todo-dialog.component';
import {ITodoService} from "../todos/todo.interface";

@Component({
  selector: 'my-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(public dialog: MatDialog, private todoservice: ITodoService) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddTodoDialogComponent, {
      maxWidth: '90%',
      minWidth: '70%',
      hasBackdrop: true,
      data: { title: '', description: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.title.trim() && result.description.trim()) {
        this.addTodo(result.title, result.description);
      }
    });
  }

  addTodo(title: string, description: string) {
      this.todoservice.getItemsCollectionRef()
        .add({ title, description, completed: false })
        .then((response) => {
          console.log(response);
        });
  }
}

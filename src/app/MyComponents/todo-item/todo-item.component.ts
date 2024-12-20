import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() i:number;
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("Onclick has been triggered")
  }
onCheckboxClick(todo:any){
  this.todoCheckbox.emit(todo);
  
}
}
